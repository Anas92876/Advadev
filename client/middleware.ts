/**
 * Advadev — Language Middleware
 * ==============================
 * Runs on the Edge before every page request.
 *
 * What it does:
 *   1. Reads the `advadev-lang` cookie from the request.
 *   2. Falls back to DEFAULT_LANG if the cookie is absent or invalid.
 *   3. Stamps the resolved lang onto the *request* headers as `x-lang`
 *      so that Server Components (layout.tsx) can read it via `headers()`.
 *   4. If the cookie was missing, sets it on the *response* so the browser
 *      persists the default preference for future requests.
 *
 * Why request headers (not response headers)?
 *   `headers()` in Server Components reads incoming request headers.
 *   We forward the lang by cloning the request headers and passing them
 *   into NextResponse.next({ request: { headers } }).
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  DEFAULT_LANG,
  LANG_COOKIE_NAME,
  LANG_COOKIE_MAX_AGE,
  isValidLang,
} from '@/lib/locale';

export function middleware(request: NextRequest) {
  const cookieLang = request.cookies.get(LANG_COOKIE_NAME)?.value;
  const lang = isValidLang(cookieLang) ? cookieLang : DEFAULT_LANG;

  // Clone request headers and inject the resolved lang.
  // Server Components read this via: headers().get('x-lang')
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-lang', lang);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Persist the default lang cookie if the browser didn't send one.
  // This means first-time visitors are cookied with the default language,
  // so subsequent page navigations are also flicker-free from the start.
  if (!isValidLang(cookieLang)) {
    response.cookies.set(LANG_COOKIE_NAME, lang, {
      path: '/',
      maxAge: LANG_COOKIE_MAX_AGE,
      sameSite: 'lax',
      // httpOnly MUST be false — client JS writes this cookie on toggle
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
    });
  }

  return response;
}

export const config = {
  /**
   * Match all routes EXCEPT:
   *   - _next/static  (compiled assets)
   *   - _next/image   (image optimisation)
   *   - Static files  (.svg, .png, .ico, .css, .js, …)
   *
   * The negative lookahead keeps the middleware off the hot path for
   * static assets — only real page and API routes run through it.
   */
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};
