'use client';

/**
 * LanguageContext
 * ================
 * Holds the active language in React state so client components (navbar,
 * contact form) update instantly on toggle.
 *
 * After writing the cookie it calls router.refresh() so that all Server
 * Components on the current page re-render with the new language from the
 * updated x-lang header (set by middleware reading the cookie).
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  type Lang,
  DEFAULT_LANG,
  LANG_COOKIE_NAME,
  LANG_COOKIE_MAX_AGE,
  getLangDir,
} from '@/lib/locale';

export type { Lang };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ar',
  setLang: () => {},
});

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang ?? DEFAULT_LANG);
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = getLangDir(lang);
  }, [lang]);

  const setLang = (newLang: Lang) => {
    // Update React state immediately — client components (navbar, form) react
    // instantly without waiting for the server round-trip.
    setLangState(newLang);

    const secure =
      typeof window !== 'undefined' && window.location.protocol === 'https:'
        ? '; Secure'
        : '';

    // Write the preference cookie so middleware stamps the correct x-lang
    // header on the next request.
    document.cookie =
      `${LANG_COOKIE_NAME}=${newLang}` +
      `; path=/` +
      `; max-age=${LANG_COOKIE_MAX_AGE}` +
      `; samesite=lax` +
      secure;

    // Re-render all Server Components on the page with the new language.
    // router.refresh() makes Next.js re-fetch server-rendered segments without
    // a full navigation, so the URL and scroll position are preserved.
    router.refresh();
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
