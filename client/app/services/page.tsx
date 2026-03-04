'use client';

import Link from 'next/link';
import {
  Cart, Settings, Global, ArrowRight, CheckCircle, Stars,
  SpeedometerMiddle, Palette, Code2, Card, Socket, Magnifer, Server, Tuning,
  GraphUp, ClockCircle, ShieldCheck,
} from '@solar-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

const serviceConfig = [
  {
    icon: Cart,
    num: '01',
    color: { icon: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', dot: 'bg-blue-400' },
    metrics: [
      { icon: GraphUp,    value: '↑40%', ar: 'زيادة في المبيعات', en: 'Avg. Sales Lift' },
      { icon: ClockCircle, value: '24/7', ar: 'دوام المتجر',      en: 'Store Uptime'   },
    ],
  },
  {
    icon: Settings,
    num: '02',
    color: { icon: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20', dot: 'bg-orange-400' },
    metrics: [
      { icon: ShieldCheck,  value: '100%', ar: 'مخصص لعملك',     en: 'Custom Built'     },
      { icon: ClockCircle,  value: '7–14', ar: 'يوم للتسليم',    en: 'Days Delivery'    },
    ],
  },
  {
    icon: Global,
    num: '03',
    color: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', dot: 'bg-emerald-400' },
    metrics: [
      { icon: GraphUp,    value: '3×',  ar: 'ثقة العملاء',     en: 'Client Trust'     },
      { icon: ShieldCheck, value: 'SEO', ar: 'محسّن للبحث',     en: 'Optimized'        },
    ],
  },
];

const additionalIcons = [SpeedometerMiddle, Palette, Code2, Card, Socket, Magnifer, Server, Tuning];
const additionalColors = [
  { icon: 'text-sky-400',    bg: 'bg-sky-500/10',    border: 'border-sky-500/20'    },
  { icon: 'text-pink-400',   bg: 'bg-pink-500/10',   border: 'border-pink-500/20'   },
  { icon: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
  { icon: 'text-green-400',  bg: 'bg-green-500/10',  border: 'border-green-500/20'  },
  { icon: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { icon: 'text-red-400',    bg: 'bg-red-500/10',    border: 'border-red-500/20'    },
  { icon: 'text-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20'   },
  { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
];

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = translations[lang].services;
  const isRtl = lang === 'ar';

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">

      {/* ─── Hero ─────────────────────────────────────────── */}
      <div className="relative bg-gray-950 pt-28 pb-36 px-5 sm:px-6 lg:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-1 absolute -top-24 left-1/3 w-[650px] h-[650px] rounded-full bg-primary-600/[0.08] blur-3xl" />
          <div className="blob-2 absolute bottom-0 right-1/4 w-[420px] h-[420px] rounded-full bg-violet-700/[0.06] blur-3xl" />
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.10]"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.55) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          {/* Diagonal crosshatch */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs font-semibold tracking-widest uppercase mb-7">
            <Stars weight="Bold" className="w-3 h-3" />
            {t.badge}
          </div>
          <h1 className="fade-in-up fade-delay-1 text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white tracking-tight leading-[1.05] mb-6">
            {t.title}
          </h1>
          <p className="fade-in-up fade-delay-2 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full h-24 sm:h-32">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" className="fill-gray-100 dark:fill-gray-950" />
          </svg>
        </div>
      </div>

      {/* ─── Main Services ────────────────────────────────── */}
      <div>
        {t.services.map((service, i) => {
          const cfg = serviceConfig[i];
          const Icon = cfg.icon;
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`relative py-28 px-5 sm:px-6 lg:px-8 overflow-hidden ${
                isEven ? 'bg-gray-100 dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900/40'
              }`}
            >
              {/* Giant background step number */}
              <div
                className="pointer-events-none select-none absolute inset-y-0 flex items-center opacity-[0.025] dark:opacity-[0.035]"
                style={{ [isRtl ? (isEven ? 'left' : 'right') : (isEven ? 'right' : 'left')]: '-2.5rem' }}
              >
                <span className="text-[18rem] font-black text-gray-900 dark:text-white leading-none">{cfg.num}</span>
              </div>

              {/* Blobs */}
              <div className="pointer-events-none absolute inset-0" aria-hidden>
                {i === 0 && <div className="blob-3 absolute top-0 right-1/4 w-[320px] h-[320px] rounded-full bg-blue-500/[0.04] dark:bg-blue-500/[0.06] blur-3xl" />}
                {i === 1 && <div className="blob-1 absolute bottom-0 left-1/4 w-[280px] h-[280px] rounded-full bg-orange-500/[0.03] dark:bg-orange-500/[0.05] blur-3xl" />}
                {i === 2 && <div className="blob-2 absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-emerald-500/[0.03] dark:bg-emerald-500/[0.05] blur-3xl" />}
              </div>

              <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                  {/* Content side */}
                  <div className={`fade-in-up ${!isEven ? 'lg:order-2' : ''}`}>
                    {/* Step label */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xs font-bold tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500">
                        {lang === 'ar' ? `الخطوة ${cfg.num}` : `Step ${cfg.num}`}
                      </span>
                      <div className="flex-1 max-w-[3rem] h-px bg-gray-200 dark:bg-gray-700" />
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${cfg.color.bg} border ${cfg.color.border} mb-5`}>
                      <Icon weight="Bold" className={`w-6 h-6 ${cfg.color.icon}`} />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-[1.05rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                      {service.desc}
                    </p>

                    {/* Metric badges */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {cfg.metrics.map((m, mi) => {
                        const MIcon = m.icon;
                        return (
                          <div key={mi} className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800">
                            <div className={`w-7 h-7 rounded-lg ${cfg.color.bg} border ${cfg.color.border} flex items-center justify-center flex-shrink-0`}>
                              <MIcon weight="Bold" className={`w-3.5 h-3.5 ${cfg.color.icon}`} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-gray-900 dark:text-white leading-none">{m.value}</p>
                              <p className="text-[0.68rem] text-gray-500 dark:text-gray-400 mt-0.5">{lang === 'ar' ? m.ar : m.en}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Feature list */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
                      {service.features.map((feature, fi) => (
                        <li key={fi} className="flex items-center gap-2.5">
                          <CheckCircle weight="Bold" className={`w-5 h-5 ${cfg.color.icon} flex-shrink-0`} />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm transition-all duration-200 shadow-primary hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(131,44,219,0.65)]"
                    >
                      {t.consultationBtn}
                      <ArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180" />
                    </Link>
                  </div>

                  {/* Visual panel */}
                  <div className={`fade-in-up fade-delay-2 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="gbc-wrap hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_32px_72px_-16px_rgba(131,44,219,0.32)]">
                      <div className="gbc-inner bg-gray-50 dark:bg-gray-950 p-8 relative overflow-hidden">
                        {/* Decorative number inside card */}
                        <div className="absolute -bottom-8 ltr:-right-4 rtl:-left-4 text-[10rem] font-black text-gray-900/[0.04] dark:text-white/[0.03] select-none leading-none pointer-events-none">
                          {cfg.num}
                        </div>
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${cfg.color.bg} border ${cfg.color.border} mb-6 relative z-10`}>
                          <Icon weight="Bold" className={`w-8 h-8 ${cfg.color.icon}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-7 relative z-10">{service.title}</h3>
                        <ul className="space-y-4 relative z-10">
                          {service.features.map((feature, fi) => (
                            <li key={fi} className="flex items-center gap-3 group/feat">
                              <span className={`w-2 h-2 rounded-full ${cfg.color.dot} flex-shrink-0 group-hover/feat:scale-150 transition-transform duration-200`} />
                              <div className="flex-1 flex items-center justify-between">
                                <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                                <CheckCircle weight="Bold" className={`w-4 h-4 ${cfg.color.icon} opacity-60 flex-shrink-0`} />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Additional Services ──────────────────────────── */}
      <div className="relative py-28 px-5 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-1 absolute -top-20 left-1/4 w-[520px] h-[520px] rounded-full bg-primary-600/[0.07] blur-3xl" />
          <div className="blob-3 absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full bg-violet-700/[0.05] blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div className="max-w-lg">
              <h2 className="fade-in-up text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                {t.additionalTitle}
              </h2>
              <p className="fade-in-up fade-delay-1 text-gray-400 text-base leading-relaxed">
                {t.additionalSubtitle}
              </p>
            </div>
            <Link
              href="/contact"
              className="fade-in-up fade-delay-2 flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-primary-500/40 text-gray-300 hover:text-primary-300 font-medium text-sm transition-all duration-200"
            >
              {lang === 'ar' ? 'اطلب خدمة' : 'Request a service'}
              <ArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.additionalServices.map((service, i) => {
              const Icon = additionalIcons[i];
              const color = additionalColors[i];
              return (
                <div
                  key={i}
                  className="fade-in-up group"
                  style={{ animationDelay: `${0.04 + i * 0.055}s` }}
                >
                  <div className="gbc-wrap h-full hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(131,44,219,0.38)]">
                    <div className="gbc-inner bg-gray-900 p-5 h-full flex flex-col">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${color.bg} border ${color.border} mb-4`}>
                        <Icon weight="Bold" className={`w-5 h-5 ${color.icon}`} />
                      </div>
                      <h3 className="text-sm font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-200 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed flex-1">{service.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <div className="relative py-28 px-5 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="blob-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-primary-600/[0.05] dark:bg-primary-600/[0.07] blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="gbc-wrap inline-block w-full hover:shadow-[0_28px_60px_-12px_rgba(131,44,219,0.22)] transition-all duration-500">
            <div className="gbc-inner bg-white dark:bg-gray-900 px-10 py-12">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 mb-6">
                <Stars weight="Bold" className="w-6 h-6 text-primary-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">{t.ctaTitle}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">{t.ctaDesc}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 hover:scale-[1.02]"
                >
                  {t.ctaBtn1}
                  <ArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold transition-all duration-200 hover:border-primary-400/40 hover:text-primary-600 dark:hover:text-primary-400 hover:-translate-y-0.5"
                >
                  {t.ctaBtn2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
