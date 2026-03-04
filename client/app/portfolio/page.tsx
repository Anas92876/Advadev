'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Stars, Share, Cart, ChefHat, Diploma, Cpu } from '@solar-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const projectMeta = [
  {
    titleAr: 'Fashion Hub',
    titleEn: 'Fashion Hub',
    index: '01',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80',
    tags: ['E-commerce', 'Dashboard', 'Sales Reports'],
    icon: Cart,
    color: {
      tag: 'bg-blue-500/15 text-blue-300 border-blue-500/25',
      icon: 'text-blue-400',
      iconBg: 'bg-blue-500/10',
      iconBorder: 'border-blue-500/20',
      accent: 'bg-blue-400',
    },
  },
  {
    titleAr: 'السوق الأميركي',
    titleEn: 'Al-Souq Al-Amriki',
    index: '02',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
    tags: ['Restaurant', 'Management', 'Multi-branch'],
    icon: ChefHat,
    color: {
      tag: 'bg-orange-500/15 text-orange-300 border-orange-500/25',
      icon: 'text-orange-400',
      iconBg: 'bg-orange-500/10',
      iconBorder: 'border-orange-500/20',
      accent: 'bg-orange-400',
    },
  },
  {
    titleAr: 'Robotics Academy',
    titleEn: 'Robotics Academy',
    index: '03',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
    tags: ['Education', 'Courses', 'Payments'],
    icon: Diploma,
    color: {
      tag: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
      icon: 'text-emerald-400',
      iconBg: 'bg-emerald-500/10',
      iconBorder: 'border-emerald-500/20',
      accent: 'bg-emerald-400',
    },
  },
  {
    titleAr: 'UniFlow',
    titleEn: 'UniFlow',
    index: '04',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80',
    tags: ['SaaS', 'AI Tools', 'Scheduling'],
    icon: Cpu,
    color: {
      tag: 'bg-violet-500/15 text-violet-300 border-violet-500/25',
      icon: 'text-violet-400',
      iconBg: 'bg-violet-500/10',
      iconBorder: 'border-violet-500/20',
      accent: 'bg-violet-400',
    },
  },
];

export default function PortfolioPage() {
  const { lang } = useLanguage();
  const t = translations[lang].portfolio;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* ─── Hero ─────────────────────────────────────────── */}
      <div className="relative bg-gray-950 pt-28 pb-24 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-1 absolute -top-20 left-1/3 w-[560px] h-[560px] rounded-full bg-primary-600/[0.09] blur-3xl" />
          <div className="blob-2 absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-700/[0.07] blur-3xl" />
          <div className="absolute inset-0 opacity-[0.10]"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.55) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold tracking-widest uppercase mb-7">
            <Stars weight="Bold" className="w-3 h-3" />
            {t.badge}
          </div>
          <h1 className="fade-in-up fade-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] mb-4">
            {t.title}
          </h1>
          <p className="fade-in-up fade-delay-2 text-lg text-gray-400 max-w-xl mx-auto mb-8">{t.subtitle}</p>
          {/* Industry tags */}
          <div className="fade-in-up fade-delay-3 flex flex-wrap justify-center gap-2 mt-2">
            {(lang === 'ar'
              ? ['تجارة إلكترونية', 'إدارة مطاعم', 'تعليم وتدريب', 'منصات SaaS']
              : ['E-commerce', 'Restaurant Systems', 'Education & Training', 'SaaS Platforms']
            ).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] border border-white/[0.10] text-gray-300"
              >
                {tag}
              </span>
            ))}</div>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-24 sm:h-32">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" className="fill-gray-100 dark:fill-gray-950" />
          </svg>
        </div>
      </div>

      {/* ─── Projects ─────────────────────────────────────── */}
      <div className="relative py-20 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-3 absolute top-0 right-1/4 w-[420px] h-[420px] rounded-full bg-primary-600/[0.03] dark:bg-primary-600/[0.05] blur-3xl" />
          <div className="blob-1 absolute bottom-0 left-1/4 w-[320px] h-[320px] rounded-full bg-violet-500/[0.03] dark:bg-violet-500/[0.04] blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto space-y-10">
          {projectMeta.map((meta, i) => {
            const title = lang === 'ar' ? meta.titleAr : meta.titleEn;
            const desc = t.projects[i].desc;
            const Icon = meta.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={i}
                className="fade-in-up group"
                style={{ animationDelay: `${0.08 + i * 0.1}s` }}
              >
                <div className="gbc-wrap hover:-translate-y-1 transition-all duration-400 hover:shadow-[0_28px_60px_-16px_rgba(131,44,219,0.28)]">
                  <div className="gbc-inner bg-white dark:bg-gray-900 overflow-hidden">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                      {/* Image side */}
                      <div className={`relative overflow-hidden ${!isEven ? 'lg:order-2' : ''}`} style={{ minHeight: '300px' }}>
                        {/* Large index number behind image */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none overflow-hidden">
                          <span className="text-[14rem] font-black text-white/[0.06] dark:text-white/[0.04] leading-none">
                            {meta.index}
                          </span>
                        </div>
                        <Image
                          src={meta.image}
                          alt={title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Cinematic overlay on hover */}
                        <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/60 transition-colors duration-400 flex flex-col items-center justify-center gap-4 z-20">
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-3 group-hover:translate-y-0 flex flex-col items-center gap-3">
                            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-2xl">
                              <Share weight="Bold" className="w-5 h-5 text-gray-900" />
                            </div>
                            <span className="text-white text-xs font-semibold tracking-wider uppercase">
                              {lang === 'ar' ? 'عرض المشروع' : 'View Project'}
                            </span>
                          </div>
                        </div>
                        {/* Color accent strip */}
                        <div className={`absolute bottom-0 ltr:left-0 rtl:right-0 w-1 h-full ${meta.color.accent}`} />
                      </div>

                      {/* Content side */}
                      <div className={`p-8 lg:p-10 flex flex-col justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                        {/* Project index + category icon */}
                        <div className="flex items-center gap-3 mb-5">
                          <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500">
                            {lang === 'ar' ? `مشروع ${meta.index}` : `Project ${meta.index}`}
                          </span>
                          <div className="h-px flex-1 max-w-[2rem] bg-gray-200 dark:bg-gray-700" />
                          <div className={`w-8 h-8 rounded-lg ${meta.color.iconBg} border ${meta.color.iconBorder} flex items-center justify-center`}>
                            <Icon weight="Bold" className={`w-4 h-4 ${meta.color.icon}`} />
                          </div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                          {title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-[0.95rem]">{desc}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-7">
                          {meta.tags.map((tag, ti) => (
                            <span
                              key={ti}
                              className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold border ${meta.color.tag}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 transition-colors group/link"
                        >
                          {lang === 'ar' ? 'أريد مشروعاً مماثلاً' : 'Build something similar'}
                          <ArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform duration-200" />
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <div className="relative py-28 px-5 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-primary-600/[0.08] blur-3xl" />
          <div className="blob-1 absolute top-8 right-16 w-[220px] h-[220px] rounded-full bg-violet-500/[0.08] blur-2xl" />
          <div className="absolute inset-0 opacity-[0.09]"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="fade-in-up text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">{t.ctaTitle}</h2>
          <p className="fade-in-up fade-delay-1 text-gray-400 text-lg mb-10 max-w-xl mx-auto">{t.ctaDesc}</p>
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.12] hover:border-white/25 text-white font-semibold transition-all duration-200 hover:bg-white/[0.05] hover:-translate-y-0.5"
            >
              {t.ctaBtn2}
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
