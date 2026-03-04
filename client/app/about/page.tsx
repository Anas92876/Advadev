'use client';

import Link from 'next/link';
import {
  ArrowRight, Stars,
  Cart, ChefHat, Diploma,
  Bolt, CheckCircle, Layers,
  ChatDots,
} from '@solar-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const workedWithConfig = [
  {
    icon: Cart,
    color: { icon: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    pointsAr: ['متاجر الملابس', 'المنتجات الرقمية', 'المتاجر متعددة الفئات'],
    pointsEn: ['Fashion stores', 'Digital products', 'Multi-category stores'],
  },
  {
    icon: ChefHat,
    color: { icon: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    pointsAr: ['مطاعم متعددة الفروع', 'منصات الطلب الإلكتروني', 'إدارة المطابخ'],
    pointsEn: ['Multi-branch restaurants', 'Online ordering platforms', 'Kitchen management'],
  },
  {
    icon: Diploma,
    color: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    pointsAr: ['مراكز التدريب والدورات', 'أكاديميات التعليم عن بعد', 'أنظمة إدارة الطلاب'],
    pointsEn: ['Training & course centers', 'Online learning academies', 'Student management systems'],
  },
];

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations[lang].about;
  const isAr = lang === 'ar';

  const stats = [
    {
      value: '7–14',
      unit: isAr ? 'يوم' : 'days',
      label: isAr ? 'سرعة التنفيذ' : 'Delivery Speed',
      icon: Bolt,
      color: { icon: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    },
    {
      value: '100',
      unit: '%',
      label: isAr ? 'رضا العملاء' : 'Client Satisfaction',
      icon: CheckCircle,
      color: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    },
    {
      value: '50+',
      unit: '',
      label: isAr ? 'مشروع مُسلَّم' : 'Projects Delivered',
      icon: Layers,
      color: { icon: 'text-primary-400', bg: 'bg-primary-500/10', border: 'border-primary-500/20' },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* ─── Hero ─────────────────────────────────────────── */}
      <div className="relative bg-gray-950 pt-28 pb-24 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-1 absolute -top-20 left-1/3 w-[560px] h-[560px] rounded-full bg-primary-600/[0.09] blur-3xl" />
          <div className="blob-2 absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full bg-violet-700/[0.07] blur-3xl" />
          <div className="absolute inset-0 opacity-[0.10]"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.55) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold tracking-widest uppercase mb-7">
            <Stars weight="Bold" className="w-3 h-3" />
            {t.badge}
          </div>
          <h1 className="fade-in-up fade-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.08] mb-5">
            {t.title}
          </h1>
          <p className="fade-in-up fade-delay-2 text-lg text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-24 sm:h-32">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" className="fill-gray-100 dark:fill-gray-950" />
          </svg>
        </div>
      </div>



      {/* ─── Story (Timeline) ─────────────────────────────── */}
      <div className="relative py-28 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-3 absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-600/[0.04] dark:bg-primary-600/[0.05] blur-3xl" />
          <div className="blob-1 absolute bottom-0 left-8 w-[280px] h-[280px] rounded-full bg-blue-500/[0.03] dark:bg-blue-500/[0.04] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: Story with timeline */}
            <div className="fade-in-up">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10">
                {t.storyTitle}
              </h2>
              <div className="relative">
                {/* Vertical timeline line */}
                <div className={`absolute top-0 bottom-0 ltr:left-[1.625rem] rtl:right-[1.625rem] w-px bg-gradient-to-b from-primary-500/30 via-primary-500/15 to-transparent`} />
                <div className="space-y-8">
                  {t.story.map((para, i) => (
                    <div key={i} className="flex gap-6">
                      {/* Timeline dot */}
                      <div className="relative flex-shrink-0">
                        <div className="w-[1.25rem] h-[1.25rem] rounded-full bg-primary-600 border-4 border-white dark:border-gray-950 shadow-[0_0_0_2px_rgba(131,44,219,0.3)] mt-1" />
                      </div>
                      {/* Paragraph */}
                      <p className="text-[1.02rem] text-gray-600 dark:text-gray-400 leading-relaxed pb-2">
                        {para}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Mission quote card */}
            <div className="fade-in-up fade-delay-2">
              <div className="gbc-wrap hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_24px_56px_-12px_rgba(131,44,219,0.22)]">
                <div className="gbc-inner bg-gray-50 dark:bg-gray-900 p-8 relative overflow-hidden">
                  {/* Quote icon */}
                  <ChatDots weight="BoldDuotone" className="absolute top-6 ltr:right-6 rtl:left-6 w-10 h-10 text-primary-500/[0.07] rotate-180" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-wider uppercase mb-6">
                      <Stars weight="Bold" className="w-3 h-3" />
                      {isAr ? 'فلسفتنا' : 'Our Philosophy'}
                    </div>
                    <blockquote className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug mb-6">
                      {isAr
                        ? '"الحل التقني يجب أن يكون بسيطًا، واضحًا، ويخدم العمل فعليًا."'
                        : '"Technology should be simple, clear, and actually serve the business."'}
                    </blockquote>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {isAr
                        ? 'لا نبني مجرد مواقع جميلة — نبني أنظمة تحل مشاكل حقيقية وتحقق نتائج ملموسة لعملائنا.'
                        : "We don't build pretty websites — we build systems that solve real problems and deliver measurable results for our clients."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini stats below quote */}
              <div className="mt-5 grid max-[340px]:grid-cols-1 grid-cols-3 gap-2 sm:gap-3">
                {(isAr
                  ? ['متاجر', 'مطاعم', 'مراكز تعليمية']
                  : ['Stores', 'Restaurants', 'Training Centers']
                ).map((label, i) => (
                  <div
                    key={i}
                    className="gbc-wrap hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="gbc-inner bg-white dark:bg-gray-900 py-3 px-2 text-center">
                      <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── Worked With ──────────────────────────────────── */}
      <div className="relative py-24 px-5 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-2 absolute top-0 right-1/3 w-[380px] h-[380px] rounded-full bg-primary-600/[0.04] dark:bg-primary-600/[0.06] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="fade-in-up text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {t.workedWithTitle}
            </h2>
            <p className="fade-in-up fade-delay-1 text-gray-500 dark:text-gray-400">
              {isAr ? 'قطاعات متعددة، نتائج حقيقية' : 'Multiple industries, real results'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.workedWith.map((item, i) => {
              const cfg = workedWithConfig[i];
              const Icon = cfg.icon;
              const points = isAr ? cfg.pointsAr : cfg.pointsEn;
              return (
                <div
                  key={i}
                  className="fade-in-up gbc-wrap hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_20px_48px_-16px_rgba(131,44,219,0.2)]"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="gbc-inner bg-white dark:bg-gray-900 p-7">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${cfg.color.bg} border ${cfg.color.border} mb-5`}>
                      <Icon weight="Bold" className={`w-6 h-6 ${cfg.color.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{item.name}</h3>
                    <ul className="space-y-2">
                      {points.map((pt, pi) => (
                        <li key={pi} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.color.icon.replace('text-', 'bg-')} flex-shrink-0`} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
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
          <p className="fade-in-up fade-delay-1 text-gray-400 text-lg mb-10">{t.ctaDesc}</p>
          <div className="fade-in-up fade-delay-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 hover:scale-[1.02]"
            >
              {t.ctaBtn1}
              <ArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
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
