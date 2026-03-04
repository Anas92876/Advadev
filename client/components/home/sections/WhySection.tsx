'use client';

import { Bolt, CheckCircle, Box, HeadphonesRound, Stars } from '@solar-icons/react';
import { translations } from '@/lib/translations';
import type { Lang } from '@/lib/locale';

const whyConfig = [
  {
    Icon: Bolt,
    metric: '7–14',
    unitAr: 'يوم', unitEn: 'days',
    descAr: 'من أول كلمة حتى إطلاق مشروعك بالكامل',
    descEn: 'From first call to full project launch',
    color: {
      icon: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20',
      glow: 'hover:shadow-[0_28px_60px_-16px_rgba(234,179,8,0.22)]',
    },
  },
  {
    Icon: CheckCircle,
    metric: '100%',
    unitAr: '', unitEn: '',
    descAr: 'رضا العملاء في كل مشروع سلّمناه حتى الآن',
    descEn: 'Client satisfaction on every delivered project',
    color: {
      icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20',
      glow: 'hover:shadow-[0_28px_60px_-16px_rgba(16,185,129,0.22)]',
    },
  },
  {
    Icon: Box,
    metric: '50+',
    unitAr: 'مشروع', unitEn: 'projects',
    descAr: 'أنظمة حقيقية مُسلَّمة لأعمال متنوعة',
    descEn: 'Real systems delivered across diverse businesses',
    color: {
      icon: 'text-primary-400', bg: 'bg-primary-500/10', border: 'border-primary-500/20',
      glow: 'hover:shadow-[0_28px_60px_-16px_rgba(131,44,219,0.28)]',
    },
  },
  {
    Icon: HeadphonesRound,
    metric: '24/7',
    unitAr: '', unitEn: '',
    descAr: 'دعم فني حقيقي لا يختفي بعد التسليم',
    descEn: "Real support that doesn't vanish after delivery",
    color: {
      icon: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20',
      glow: 'hover:shadow-[0_28px_60px_-16px_rgba(59,130,246,0.22)]',
    },
  },
];

const homeAr = translations.ar.home;
const homeEn = translations.en.home;

export default function WhySection({ lang }: { lang: Lang }) {
  const t = lang === 'en' ? homeEn : homeAr;
  const isAr = lang !== 'en';

  return (
    <section className="relative py-28 lg:py-36 bg-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(131,44,219,0.6) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="blob-3 absolute top-0 right-1/4 w-[520px] h-[520px] rounded-full bg-primary-600/[0.06] blur-3xl" />
        <div className="blob-1 absolute bottom-0 left-8 w-[340px] h-[340px] rounded-full bg-blue-500/[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.09] text-primary-300 text-[10px] font-black tracking-[0.22em] uppercase mb-6">
            <Stars weight="Bold" className="w-3 h-3" />
            {isAr ? 'لماذا نحن' : 'Why Us'}
          </div>
          <h2 className="fade-in-up fade-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-4">
            {t.whyTitle}
          </h2>
          <p className="fade-in-up fade-delay-2 text-gray-400 text-lg leading-relaxed">
            {isAr
              ? 'أرقام حقيقية من مشاريع حقيقية — لا وعود فارغة'
              : 'Real numbers from real projects — no empty promises'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyConfig.map((item, i) => {
            const Icon = item.Icon;
            const unit = isAr ? item.unitAr : item.unitEn;
            return (
              <div
                key={i}
                className={`fade-in-up gbc-wrap hover:-translate-y-2 transition-all duration-300 ${item.color.glow}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="gbc-inner bg-gray-900 p-5 sm:p-8 relative overflow-hidden">
                  <span className="pointer-events-none select-none absolute ltr:-right-3 rtl:-left-3 top-1 text-[6rem] font-black leading-none text-white/[0.04]">
                    {item.metric}
                  </span>
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${item.color.bg} border ${item.color.border} mb-7`}>
                      <Icon weight="Bold" className={`w-5 h-5 ${item.color.icon}`} />
                    </div>
                    <div className="flex items-baseline gap-2.5 mb-3">
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                        {item.metric}
                      </span>
                      {unit && (
                        <span className={`text-xl font-bold ${item.color.icon}`}>{unit}</span>
                      )}
                    </div>
                    <p className="text-base font-bold text-white mb-1.5 leading-snug">{t.reasons[i]}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {isAr ? item.descAr : item.descEn}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
