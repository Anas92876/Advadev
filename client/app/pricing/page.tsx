'use client';

import Link from 'next/link';
import {
  CheckCircle, ArrowRight, Stars, Bolt,
  Cart, Settings, Star,
} from '@solar-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

/* ─── Per-plan visual config (3 plans) ─────────────────── */
const planConfig = [
  {
    icon:        Cart,
    num:         '01',
    accentBar:   'bg-blue-400',
    iconBg:      'bg-blue-500/10',
    iconBorder:  'border-blue-500/20',
    iconColor:   'text-blue-400',
    checkBg:     'bg-blue-500/10',
    checkBorder: 'border-blue-500/20',
    checkColor:  'text-blue-400',
    numColor:    'text-gray-100 dark:text-white/[0.03]',
    ctaBg:       'bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-100',
    ctaText:     'text-white dark:text-gray-900',
  },
  {
    icon:        Star,
    num:         '02',
    accentBar:   'bg-primary-400',
    iconBg:      'bg-white/10',
    iconBorder:  'border-white/15',
    iconColor:   'text-white',
    checkBg:     'bg-white/10',
    checkBorder: 'border-white/16',
    checkColor:  'text-white',
    numColor:    'text-white/[0.04]',
    ctaBg:       'bg-white hover:bg-gray-50',
    ctaText:     'text-primary-700',
  },
  {
    icon:        Settings,
    num:         '03',
    accentBar:   'bg-violet-400',
    iconBg:      'bg-violet-500/10',
    iconBorder:  'border-violet-500/20',
    iconColor:   'text-violet-400',
    checkBg:     'bg-violet-500/10',
    checkBorder: 'border-violet-500/20',
    checkColor:  'text-violet-400',
    numColor:    'text-gray-100 dark:text-white/[0.03]',
    ctaBg:       'bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-100',
    ctaText:     'text-white dark:text-gray-900',
  },
];

const FEATURED_IDX = 1;

/* ─── Page ───────────────────────────────────────────────── */
export default function PricingPage() {
  const { lang } = useLanguage();
  const t       = translations[lang].pricing;
  const isAr    = lang === 'ar';

  const trustItems = isAr
    ? [
        { symbol: '⚡', label: 'تسليم خلال 7–14 يوم' },
        { symbol: '🛡', label: 'دعم فني بعد التسليم' },
        { symbol: '✓',  label: 'بدون رسوم مخفية'    },
        { symbol: '★',  label: 'ضمان الجودة'         },
      ]
    : [
        { symbol: '⚡', label: '7–14 Day Delivery'   },
        { symbol: '🛡', label: 'Post-Launch Support' },
        { symbol: '✓',  label: 'No Hidden Fees'      },
        { symbol: '★',  label: 'Quality Guarantee'   },
      ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 overflow-x-hidden">

      {/* ─── Hero ─────────────────────────────────────────── */}
      <div className="relative z-0 bg-gray-950 pt-28 pb-20 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {/* Architectural grid */}
          <div
            className="absolute inset-0 opacity-[0.055]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(131,44,219,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(131,44,219,0.8) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
          <div className="blob-1 absolute -top-48 left-1/4 w-[700px] h-[700px] rounded-full bg-primary-600/[0.07] blur-3xl" />
          <div className="blob-3 absolute -bottom-12 right-1/4 w-[480px] h-[480px] rounded-full bg-violet-600/[0.06] blur-3xl" />
          {/* Diagonal crosshatch */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-55deg, rgba(255,255,255,0.9) 0, rgba(255,255,255,0.9) 1px, transparent 0, transparent 64px)',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-primary-300 text-[10px] font-black tracking-[0.24em] uppercase mb-8">
            <Stars weight="Bold" className="w-3 h-3" />
            {t.badge}
          </div>

          {/* Headline */}
          <h1 className="fade-in-up fade-delay-1 text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white tracking-[-0.03em] leading-[1.02] mb-5">
            {t.title}
          </h1>

          {/* Sub */}
          <p className="fade-in-up fade-delay-2 text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            {isAr
              ? 'اختر الخطة التي تناسب حجم عملك وابدأ اليوم'
              : 'Choose the plan that fits your business and get started today'}
          </p>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-16 sm:h-20">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" className="fill-gray-100 dark:fill-gray-950" />
          </svg>
        </div>
      </div>

      {/* ─── Plans — 3-col side-by-side ───────────────────── */}
      <div className="relative z-10 pt-16 pb-24 px-5 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-80" aria-hidden>
          <div className="blob-2 absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[280px] rounded-full bg-primary-600/[0.05] dark:bg-primary-600/[0.08] blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto">

          {/*
            Desktop: 3 cards — featured center lifts via -mt-14
            Tablet:  stacked
            Mobile:  stacked
          */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-end">
            {t.plans.map((plan, planIdx) => {
              const cfg        = planConfig[planIdx];
              const Icon       = cfg.icon;
              const isFeatured = planIdx === FEATURED_IDX;

              return (
                <div
                  key={planIdx}
                  className={[
                    'relative fade-in-up',
                    isFeatured ? 'lg:-mt-14 z-10' : 'opacity-90 hover:opacity-100 transition-opacity duration-300',
                  ].join(' ')}
                  style={{ animationDelay: `${planIdx * 0.08}s` }}
                >
                  {/* Purple aura — featured only, always visible */}
                  {isFeatured && (
                    <div
                      className="pointer-events-none absolute -inset-4 rounded-[28px] bg-primary-600/[0.20] blur-2xl"
                      aria-hidden
                    />
                  )}

                  {/* Floating "Recommended" badge — sits above the card */}
                  {isFeatured && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-violet-600 shadow-[0_4px_24px_rgba(131,44,219,0.55)] whitespace-nowrap">
                      <Star weight="Bold" className="w-3 h-3 text-yellow-300 flex-shrink-0" />
                      <span className="text-[11px] font-black text-white tracking-[0.2em] uppercase">
                        {t.mostPopular}
                      </span>
                      <Star weight="Bold" className="w-3 h-3 text-yellow-300 flex-shrink-0" />
                    </div>
                  )}

                  <div
                    className={[
                      'relative gbc-wrap h-full transition-all duration-500 hover:-translate-y-2',
                      isFeatured
                        ? 'shadow-[0_32px_72px_-8px_rgba(131,44,219,0.50)] hover:shadow-[0_56px_96px_-8px_rgba(131,44,219,0.65)]'
                        : 'hover:shadow-[0_24px_56px_-16px_rgba(131,44,219,0.20)]',
                    ].join(' ')}
                  >
                    <div
                      className={[
                        'gbc-inner flex flex-col overflow-hidden',
                        isFeatured
                          ? 'bg-gradient-to-br from-[#1e0640] via-[#130230] to-[#09011a] min-h-[500px]'
                          : 'bg-white dark:bg-gray-900 min-h-[460px]',
                      ].join(' ')}
                    >
                      {/* ── Accent top bar (fixes top border-radius too) ── */}
                      <div
                        className={[
                          'h-[3px] w-full flex-shrink-0 rounded-t-[19px]',
                          isFeatured ? 'bg-gradient-to-r from-primary-400 to-violet-400' : cfg.accentBar,
                        ].join(' ')}
                      />

                      {/* ── Card body ───────────────────────────────── */}
                      <div className="p-7 xl:p-8 flex flex-col flex-1 relative overflow-hidden">

                        {/* Icon */}
                        <div className={`w-12 h-12 rounded-2xl ${cfg.iconBg} border ${cfg.iconBorder} flex items-center justify-center mb-5 flex-shrink-0`}>
                          <Icon weight="Bold" className={`w-5 h-5 ${cfg.iconColor}`} />
                        </div>

                        {/* Plan name */}
                        <p className={`text-[10px] font-black tracking-[0.22em] uppercase mb-2 ${isFeatured ? 'text-primary-400' : 'text-gray-400 dark:text-gray-500'}`}>
                          {plan.name}
                        </p>

                        {/* Price */}
                        <p className={`text-[1.6rem] xl:text-[1.8rem] font-black tracking-tight leading-[1.1] mb-3 ${isFeatured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                          {plan.price}
                        </p>

                        {/* Accent divider stripe */}
                        {isFeatured ? (
                          <div className="w-14 h-[2px] rounded-full bg-gradient-to-r from-primary-400 to-violet-400 mb-7" />
                        ) : (
                          <div className={`w-12 h-[2px] rounded-full ${cfg.accentBar} mb-6`} />
                        )}

                        {/* Feature list */}
                        <ul className="flex-1 space-y-3.5 mb-8">
                          {plan.features.map((feature, fi) => (
                            <li key={fi} className="flex items-start gap-2.5">
                              <CheckCircle weight="Bold" className={`w-4 h-4 ${cfg.checkColor} flex-shrink-0 mt-0.5`} />
                              <span className={`text-sm leading-snug ${isFeatured ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA button */}
                        <Link
                          href="/contact"
                          className={[
                            'flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5',
                            cfg.ctaBg,
                            cfg.ctaText,
                            isFeatured
                              ? 'shadow-[0_8px_32px_-4px_rgba(255,255,255,0.22)] hover:shadow-[0_12px_40px_-4px_rgba(255,255,255,0.30)]'
                              : '',
                          ].join(' ')}
                        >
                          {plan.cta}
                          <ArrowRight weight="Bold" className="w-3.5 h-3.5 rtl:rotate-180" />
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Trust strip ─────────────────────────────────── */}
          <div className="fade-in-up fade-delay-4 mt-10 rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900/60 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x divide-gray-200/80 dark:divide-gray-800">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 py-3 sm:py-4">
                  <span className="text-sm leading-none">{item.symbol}</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── CTA — editorial horizontal layout ───────────── */}
      <div className="relative py-24 px-5 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-primary-600/[0.08] blur-3xl" />
          <div className="blob-3 absolute bottom-8 ltr:left-16 rtl:right-16 w-[200px] h-[200px] rounded-full bg-blue-500/[0.06] blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.5) 1px, transparent 1px)',
              backgroundSize:  '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="fade-in-up text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                {t.ctaTitle}
              </h2>
              <p className="fade-in-up fade-delay-1 text-gray-400 text-lg leading-relaxed">
                {t.ctaDesc}
              </p>
            </div>
            <div className="fade-in-up fade-delay-2 flex flex-col sm:flex-row gap-3 flex-shrink-0">
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

    </div>
  );
}
