'use client';

import Link from 'next/link';
import { ArrowRight } from '@solar-icons/react';
import { translations } from '@/lib/translations';
import type { Lang } from '@/lib/locale';

const homeAr = translations.ar.home;
const homeEn = translations.en.home;

export default function CtaSection({ lang }: { lang: Lang }) {
  const t = lang === 'en' ? homeEn : homeAr;

  return (
    <section className="relative py-28 lg:py-36 bg-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="blob-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary-600/[0.09] blur-3xl" />
        <div className="blob-1 absolute top-8 right-16 w-[220px] h-[220px] rounded-full bg-violet-500/[0.1] blur-2xl" />
        <div className="blob-3 absolute bottom-8 left-16 w-[180px] h-[180px] rounded-full bg-blue-500/[0.06] blur-2xl" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.6) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <h2 className="fade-in-up text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">
          {t.ctaTitle}
        </h2>
        <p className="fade-in-up fade-delay-1 text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          {t.ctaDesc}
        </p>
        <div className="fade-in-up fade-delay-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            {t.ctaBtn1}
            <ArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/[0.12] hover:border-white/25 text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-white/[0.05] hover:-translate-y-0.5"
          >
            {t.ctaBtn2}
          </Link>
        </div>
      </div>
    </section>
  );
}
