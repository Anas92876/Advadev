/**
 * Advadev — Locale Configuration
 * ================================
 * Single source of truth for language settings.
 *
 * To add a new language (e.g. French):
 *   1. Add 'fr' to SUPPORTED_LANGS
 *   2. Add the dir to RTL_LANGS if it's RTL (French is not)
 *   3. Add translations in lib/translations.ts
 *   4. That's it — middleware, layout, and context all pick it up automatically.
 */

// ── Supported languages ──────────────────────────────────────────────────────
export const SUPPORTED_LANGS = ['ar', 'en'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

// ── Defaults ─────────────────────────────────────────────────────────────────
export const DEFAULT_LANG: Lang = 'ar';

// ── Cookie ───────────────────────────────────────────────────────────────────
export const LANG_COOKIE_NAME = 'advadev-lang';
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

// ── RTL languages ─────────────────────────────────────────────────────────────
// Add other RTL languages here (Hebrew: 'he', Farsi: 'fa', Urdu: 'ur', …)
const RTL_LANGS: ReadonlySet<Lang> = new Set(['ar']);

// ── Utilities ────────────────────────────────────────────────────────────────

/** Type-safe guard — validates a value from cookies/headers before use. */
export function isValidLang(value: unknown): value is Lang {
  return (
    typeof value === 'string' &&
    (SUPPORTED_LANGS as readonly string[]).includes(value)
  );
}

/** Returns the correct HTML `dir` attribute for a given language. */
export function getLangDir(lang: Lang): 'rtl' | 'ltr' {
  return RTL_LANGS.has(lang) ? 'rtl' : 'ltr';
}
