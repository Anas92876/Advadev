'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HamburgerMenu, CloseCircle, Global, Moon, Sun } from '@solar-icons/react';
import { useTheme } from 'next-themes';
import { cn } from '@/utils/cn';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import type { Lang } from '@/contexts/LanguageContext';

// ─────────────────────────────────────────────────────────────────────────────
// NavLink
// ─────────────────────────────────────────────────────────────────────────────
function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative py-1.5 text-[13.5px] font-medium tracking-[0.01em] group',
        'whitespace-nowrap transition-colors duration-200 ease-out',
        'outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-primary-500',
        active ? 'text-nav-text' : 'text-nav-muted hover:text-nav-text'
      )}
    >
      {children}
      <span
        className={cn(
          'absolute -bottom-px inset-x-0 h-px rounded-full bg-nav-underline',
          'origin-left rtl:origin-right',
          'transition-[transform,opacity] duration-200 ease-out',
          active
            ? 'scale-x-100 opacity-100'
            : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-40 group-focus-visible:scale-x-100 group-focus-visible:opacity-40'
        )}
      />
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LangButton — Globe icon + language code
// Two sizes: 'md' (desktop strip, h-9) and 'sm' (mobile bar, h-8)
// ─────────────────────────────────────────────────────────────────────────────
function LangButton({
  lang,
  onClick,
  size = 'md',
}: {
  lang: Lang;
  onClick: () => void;
  size?: 'md' | 'sm';
}) {
  return (
    <button
      onClick={onClick}
      aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      className={cn(
        'flex items-center gap-[5px] rounded-xl',
        'text-nav-subtle hover:text-nav-text',
        'hover:bg-nav-surface active:bg-nav-surface',
        'transition-all duration-200',
        'outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
        size === 'md' ? 'h-9 px-3' : 'h-8 px-2.5'
      )}
    >
      <Global
        weight="Bold"
        className={cn('flex-shrink-0', size === 'md' ? 'w-[15px] h-[15px]' : 'w-[13px] h-[13px]')}
      />
      <span
        className={cn(
          'font-bold tracking-[0.09em] leading-none',
          size === 'md' ? 'text-[11px]' : 'text-[10.5px]'
        )}
      >
        {lang === 'ar' ? 'EN' : 'AR'}
      </span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ThemeButton — Sun / Moon toggle
// Matches LangButton sizing exactly so both live in the same visual strip.
// ─────────────────────────────────────────────────────────────────────────────
function ThemeButton({ size = 'md' }: { size?: 'md' | 'sm' }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <div className={cn('rounded-xl flex-shrink-0', size === 'md' ? 'w-9 h-9' : 'w-8 h-8')} />
    );
  }

  const isDark = (theme === 'system' ? systemTheme : theme) === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative flex items-center justify-center flex-shrink-0 rounded-xl',
        'text-nav-subtle hover:text-nav-text',
        'hover:bg-nav-surface active:bg-nav-surface',
        'transition-all duration-200',
        'outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
        size === 'md' ? 'w-9 h-9' : 'w-8 h-8'
      )}
    >
      {/* Moon — light mode indicator */}
      <span
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'scale(0.45) rotate(80deg)' : 'scale(1) rotate(0deg)',
          transition: 'opacity 300ms ease, transform 300ms cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <Moon weight="Bold" className={size === 'md' ? 'w-[15px] h-[15px]' : 'w-[13px] h-[13px]'} />
      </span>

      {/* Sun — dark mode indicator */}
      <span
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0.45) rotate(-80deg)',
          transition: 'opacity 300ms ease, transform 300ms cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <Sun weight="Bold" className={size === 'md' ? 'w-[15px] h-[15px]' : 'w-[13px] h-[13px]'} />
      </span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// UtilityStrip — frosted control pill: [ 🌐 EN ] | [ ◐ ]
//
// A single rounded container that groups both utility controls visually.
// The hairline separator between them reads as "same family, distinct action."
// Background + border auto-switch via CSS variables — no dark: variants.
// ─────────────────────────────────────────────────────────────────────────────
function UtilityStrip({
  lang,
  onToggleLang,
  size = 'md',
}: {
  lang: Lang;
  onToggleLang: () => void;
  size?: 'md' | 'sm';
}) {
  return (
    <div
      className={cn(
        'flex items-center rounded-xl overflow-hidden',
        'border border-nav-border',
        size === 'md' ? 'h-9' : 'h-8'
      )}
      style={{ background: 'var(--nav-surface)' }}
    >
      <LangButton lang={lang} onClick={onToggleLang} size={size} />

      {/* Hairline separator */}
      <div
        aria-hidden
        className="w-px self-stretch my-[6px] flex-shrink-0"
        style={{ background: 'var(--nav-divider)' }}
      />

      <ThemeButton size={size} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CtaButton
// ─────────────────────────────────────────────────────────────────────────────
function CtaButton({
  label,
  size = 'default',
  onClick,
}: {
  label: string;
  size?: 'default' | 'large';
  onClick?: () => void;
}) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'text-white font-semibold tracking-wide',
        'transition-all duration-200 hover:brightness-110 active:brightness-95',
        'outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
        'whitespace-nowrap flex-shrink-0',
        size === 'large'
          ? 'w-full h-[52px] text-[15px]'
          : 'h-[38px] px-[20px] text-[13px]'
      )}
      style={{
        background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-400) 100%)',
      }}
    >
      {label}
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FuturisticNavbar
// ─────────────────────────────────────────────────────────────────────────────
export default function FuturisticNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const navItems = [
    { name: t.home,      href: '/'          },
    { name: t.services,  href: '/services'  },
    { name: t.portfolio, href: '/portfolio' },
    { name: t.pricing,   href: '/pricing'   },
    { name: t.about,     href: '/about'     },
  ];

  // ── Scroll detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Body scroll lock ──────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // ── Close on route change ─────────────────────────────────────────────────
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // ── Escape key ────────────────────────────────────────────────────────────
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setMobileOpen(false);
  }, []);
  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const isHomePage = pathname === '/';
  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  // Height shrinks from 72 → 60px after scroll
  const navH = scrolled && !mobileOpen ? 60 : 72;

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header
        data-nav-theme={isHomePage ? 'auto' : 'fixed'}
        style={{ height: `${navH}px` }}
        className="fixed inset-x-0 top-0 z-50 transition-[height] duration-300"
      >
        {/* Glass panel — fades in on scroll */}
        <div
          aria-hidden
          className={cn(
            'absolute inset-0 pointer-events-none',
            'bg-nav-scrolled backdrop-blur-md',
            'border-b border-nav-border',
            'transition-opacity duration-300 ease-out',
            scrolled && !mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
        />

        <div className="relative h-full max-w-7xl mx-auto px-3 sm:px-5">

          {/* ── Desktop — 3-column grid ──────────────────────────────────── */}
          {/*
           * grid-cols-[1fr_auto_1fr]: nav is truly centered.
           * dir="rtl" on <html> mirrors columns — zero JS overrides needed.
           *
           * Col 1 (start):  Logo
           * Col 2 (center): Nav links
           * Col 3 (end):    [ UtilityStrip ] [ CTA ]  — always visible
           */}
          <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-full">

            {/* Col 1 — Logo */}
            <div className="flex items-center justify-self-start">
              <Link
                href="/"
                className={cn(
                  'flex items-center gap-2.5 flex-shrink-0 rounded-md outline-none',
                  'focus-visible:ring-2 focus-visible:ring-primary-500'
                )}
              >
                <img src="/logo.svg" alt="Advadev" className="h-8 w-auto flex-shrink-0" />
                <span className="font-bold text-[15px] text-nav-text tracking-tight leading-none">
                  Advadev
                </span>
              </Link>
            </div>

            {/* Col 2 — Nav links */}
            <nav
              className="flex items-center gap-7"
              aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}
            >
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} active={isActive(item.href)}>
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Col 3 — Utility strip + CTA, always visible */}
            {/*
             * UtilityStrip: frosted pill [ 🌐 EN | ◐ ] — secondary controls.
             * CtaButton: gradient pill [ Free Consultation ] — primary action.
             * Gap between them signals "different weight, same end section."
             *
             * RTL: flex-row mirrors automatically.
             *   LTR → [ 🌐 EN | ◐ ]  [ Free Consultation ]
             *   RTL → [ Free Consultation ]  [ 🌐 AR | ◐ ]
             */}
            <div className="flex items-center gap-2.5 justify-self-end">
              <UtilityStrip lang={lang} onToggleLang={toggleLang} size="md" />
              <CtaButton label={t.cta} />
            </div>
          </div>

          {/* ── Mobile bar ───────────────────────────────────────────────── */}
          {/*
           * Compact standalone controls (no strip border on mobile — too heavy
           * at small sizes). Each button is its own touch target.
           * dir="rtl" auto-swaps logo and controls sides.
           */}
          <div className="flex lg:hidden items-center justify-between h-full">
            <Link
              href="/"
              className="flex items-center gap-2 flex-shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <img src="/logo.svg" alt="Advadev" className="h-7 w-auto" />
              <span className="font-bold text-[14px] text-nav-text tracking-tight">Advadev</span>
            </Link>

            <div className="flex items-center gap-0.5">
              <LangButton lang={lang} onClick={toggleLang} size="sm" />
              <ThemeButton size="sm" />
              <button
                onClick={() => setMobileOpen(true)}
                className={cn(
                  'ms-1 p-2 rounded-lg',
                  'text-nav-subtle hover:text-nav-text hover:bg-nav-surface',
                  'transition-all duration-200',
                  'outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
                )}
                aria-label={lang === 'ar' ? 'فتح القائمة' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <HamburgerMenu weight="Bold" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Fullscreen Overlay ───────────────────────────────────────── */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label={lang === 'ar' ? 'قائمة التنقل' : 'Navigation menu'}
        className={cn(
          'fixed inset-0 z-50 lg:hidden flex flex-col bg-nav-overlay',
          'transition-opacity duration-300 ease-out',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Ambient brand gradient */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 90% 40% at 50% 0%, rgba(131,44,219,0.06) 0%, transparent 65%)',
          }}
        />

        {/* Overlay header */}
        <div className="relative flex items-center justify-between px-3 sm:px-5 h-[72px] border-b border-nav-divider flex-shrink-0">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5 outline-none"
          >
            <img src="/logo.svg" alt="Advadev" className="h-7 w-auto" />
            <span className="font-bold text-[14px] text-nav-text tracking-tight">Advadev</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className={cn(
              'p-2 rounded-lg',
              'text-nav-subtle hover:text-nav-text hover:bg-nav-surface',
              'transition-all duration-200',
              'outline-none focus-visible:ring-2 focus-visible:ring-primary-500'
            )}
            aria-label={lang === 'ar' ? 'إغلاق القائمة' : 'Close menu'}
          >
            <CloseCircle weight="Bold" className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav
          className="relative flex-1 flex flex-col justify-center px-3 sm:px-6 py-2"
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}
        >
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'relative flex items-center max-[340px]:py-3 py-[17px] border-b border-nav-divider',
                'max-[340px]:text-[18px] text-[25px] font-bold tracking-tight',
                'transition-colors duration-200',
                isActive(item.href) ? 'text-nav-text' : 'text-nav-muted hover:text-nav-text'
              )}
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0px)' : 'translateY(14px)',
                transition: `
                  opacity  0.45s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms,
                  transform 0.45s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms,
                  color    0.2s ease
                `,
              }}
            >
              <span
                className={cn(
                  'absolute start-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-nav-underline',
                  'transition-all duration-300',
                  isActive(item.href) ? 'h-[22px] opacity-100' : 'h-0 opacity-0'
                )}
              />
              <span className="block ps-5">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom — CTA + utility strip */}
        <div
          className="relative px-4 sm:px-6 pt-4 sm:pt-5 pb-8 sm:pb-10 border-t border-nav-divider flex-shrink-0 flex flex-col gap-3"
          style={{
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0px)' : 'translateY(14px)',
            transition: `
              opacity  0.45s cubic-bezier(0.16,1,0.3,1) ${navItems.length * 60 + 40}ms,
              transform 0.45s cubic-bezier(0.16,1,0.3,1) ${navItems.length * 60 + 40}ms
            `,
          }}
        >
          <CtaButton label={t.cta} size="large" onClick={() => setMobileOpen(false)} />

          {/* Full-width utility strip — accessible from the overlay too */}
          <div
            className="flex items-center justify-center h-11 rounded-xl border border-nav-divider overflow-hidden"
            style={{ background: 'var(--nav-surface)' }}
          >
            <LangButton lang={lang} onClick={toggleLang} size="md" />
            <div
              aria-hidden
              className="w-px self-stretch my-[7px] flex-shrink-0"
              style={{ background: 'var(--nav-divider)' }}
            />
            <ThemeButton size="md" />
          </div>
        </div>
      </div>
    </>
  );
}
