// Server Component — no 'use client'
import Link from 'next/link';
import { Letter, ArrowRight } from '@solar-icons/react/ssr';
import { type Lang } from '@/lib/locale';
import { translations } from '@/lib/translations';

const navHrefs = ['/', '/services', '/portfolio', '/pricing', '/about', '/contact'];
const serviceHrefs = ['/services', '/services', '/services'];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
    </svg>
  );
}

const socialLinks = [
  { name: 'GitHub',   href: '#',                        Icon: GithubIcon   },
  { name: 'LinkedIn', href: '#',                        Icon: LinkedinIcon },
  { name: 'Email',    href: 'mailto:hello@advadev.com', Icon: Letter,      isSolar: true },
];

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* ─── Top grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">

          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Advadev" className="h-8 w-auto" />
              <span className="text-lg font-bold text-white tracking-tight">Advadev</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              {t.tagline}
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ name, href, Icon, isSolar }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-9 h-9 rounded-xl bg-gray-800/70 border border-gray-700/50 hover:border-primary-600/40 hover:bg-gray-800 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  {isSolar
                    ? <Icon weight="Bold" className="w-4 h-4 text-gray-400 group-hover:text-primary-400 transition-colors" />
                    : <Icon className="w-4 h-4 text-gray-400 group-hover:text-primary-400 transition-colors" />
                  }
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-5">
              {t.quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {t.navLinks.map((name, index) => (
                <li key={index}>
                  <Link
                    href={navHrefs[index]}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 flex-shrink-0">
                      <ArrowRight weight="Bold" className="w-3 h-3 rtl:rotate-180" />
                    </span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-5">
              {t.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {t.serviceLinks.map((name, index) => (
                <li key={index}>
                  <Link
                    href={serviceHrefs[index]}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 flex-shrink-0">
                      <ArrowRight weight="Bold" className="w-3 h-3 rtl:rotate-180" />
                    </span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-5">
              {t.contactTitle}
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@advadev.com"
                className="text-sm text-gray-400 hover:text-primary-400 transition-colors block"
              >
                hello@advadev.com
              </a>
              <p className="text-sm text-gray-500">{t.available}</p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-primary"
                >
                  {t.getStarted}
                  <ArrowRight weight="Bold" className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Divider ──────────────────────────────── */}
        <div className="border-t border-gray-800/60 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Advadev. {t.rights}
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                {t.privacy}
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
