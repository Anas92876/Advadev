'use client';

import Link from 'next/link';
import { ArrowRight, Cart, Settings, Global, Stars, AltArrowRight } from '@solar-icons/react';
import { translations } from '@/lib/translations';
import type { Lang } from '@/lib/locale';

const serviceIcons = [Cart, Settings, Global];
const serviceColors = [
  { icon: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/20'    },
  { icon: 'text-orange-400',  bg: 'bg-orange-500/10',  border: 'border-orange-500/20'  },
  { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
];

const homeAr = translations.ar.home;
const homeEn = translations.en.home;

export default function ServicesSection({ lang }: { lang: Lang }) {
  const t = lang === 'en' ? homeEn : homeAr;

  return (
    <section className="relative py-28 lg:py-36 bg-gray-100 dark:bg-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="blob-1 absolute -top-24 left-1/4 w-[480px] h-[480px] rounded-full bg-primary-600/[0.05] dark:bg-primary-600/[0.07] blur-3xl" />
        <div className="blob-2 absolute bottom-0 right-1/4 w-[360px] h-[360px] rounded-full bg-violet-500/[0.04] dark:bg-violet-500/[0.06] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200/60 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-widest uppercase mb-5">
            <Stars weight="Bold" className="w-3 h-3" />
            {t.servicesBadge}
          </div>
          <h2 className="fade-in-up fade-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
            {t.servicesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 mb-12">
          {t.services.map((service, i) => {
            const Icon = serviceIcons[i];
            const color = serviceColors[i];
            return (
              <div
                key={i}
                className="fade-in-up group"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="gbc-wrap h-full hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_20px_48px_-16px_rgba(131,44,219,0.22),0_0_24px_rgba(131,44,219,0.07)]">
                  <div className="gbc-inner bg-gray-50 dark:bg-gray-900 p-7">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${color.bg} border ${color.border} mb-5`}>
                      <Icon weight="Bold" className={`w-5 h-5 ${color.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2.5">{service.title}</h3>
                    <p className="text-[0.9rem] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{service.desc}</p>
                    <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span>{service.cta}</span>
                      <AltArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="fade-in-up fade-delay-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
          >
            {t.exploreAll}
            <ArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
