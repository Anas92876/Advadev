'use client';

import { ChatSquare, Palette, Code2, ShieldCheck, Rocket, Stars } from '@solar-icons/react';
import { translations } from '@/lib/translations';
import type { Lang } from '@/lib/locale';

const stepConfig = [
  {
    Icon: ChatSquare,
    color: { icon: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
    subtitleAr: 'نفهم عملك من الداخل قبل أن نكتب سطراً واحداً',
    subtitleEn: 'We understand your business inside-out before writing a single line',
  },
  {
    Icon: Palette,
    color: { icon: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
    subtitleAr: 'نصمم واجهة وتجربة مستخدم كاملة قبل أي تطوير',
    subtitleEn: 'We design the full interface and UX before any development',
  },
  {
    Icon: Code2,
    color: { icon: 'text-primary-400', bg: 'bg-primary-500/10', border: 'border-primary-500/20' },
    subtitleAr: 'كود نظيف، أداء عالٍ، وقابلية توسع مضمونة',
    subtitleEn: 'Clean code, high performance, and guaranteed scalability',
  },
  {
    Icon: ShieldCheck,
    color: { icon: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
    subtitleAr: 'نختبر كل وظيفة على أجهزة حقيقية حتى يعمل بلا أعطال',
    subtitleEn: 'Every feature tested on real devices until it works flawlessly',
  },
  {
    Icon: Rocket,
    color: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
    subtitleAr: 'نطلق مشروعك ونبقى معك — دعم حقيقي لا ينتهي بالتسليم',
    subtitleEn: "We launch and stay with you — support that doesn't end at delivery",
  },
];

const homeAr = translations.ar.home;
const homeEn = translations.en.home;

export default function HowSection({ lang }: { lang: Lang }) {
  const t = lang === 'en' ? homeEn : homeAr;
  const isAr = lang !== 'en';

  return (
    <section className="relative py-28 lg:py-36 bg-gray-100 dark:bg-gray-950 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="blob-2 absolute top-0 right-1/3 w-[380px] h-[380px] rounded-full bg-violet-600/[0.04] dark:bg-violet-600/[0.06] blur-3xl" />
        <div className="blob-3 absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-600/[0.03] dark:bg-primary-600/[0.05] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16">
          <div className="max-w-xl">
            <div className="fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200/60 dark:border-primary-500/20 text-primary-600 dark:text-primary-400 text-[10px] font-black tracking-[0.22em] uppercase mb-5">
              <Stars weight="Bold" className="w-3 h-3" />
              {isAr ? 'العملية' : 'The Process'}
            </div>
            <h2 className="fade-in-up fade-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
              {t.howTitle}
            </h2>
          </div>
          <p className="fade-in-up fade-delay-2 text-gray-500 dark:text-gray-400 text-[0.95rem] leading-relaxed max-w-xs ltr:lg:text-right rtl:lg:text-left">
            {isAr
              ? 'عملية واضحة ومنظمة توصلك من الفكرة إلى الإطلاق دون أي مفاجآت'
              : 'A clear, structured process from first idea to full launch — no surprises'}
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute h-px ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-transparent via-primary-500/30 to-transparent pointer-events-none"
            style={{ top: '3rem', insetInlineStart: '4%', insetInlineEnd: '4%' }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.steps.map((step, i) => {
              const cfg = stepConfig[i];
              const Icon = cfg.Icon;
              return (
                <div
                  key={i}
                  className="fade-in-up"
                  style={{ animationDelay: `${0.08 + i * 0.1}s` }}
                >
                  <div className="gbc-wrap h-full hover:-translate-y-1.5 transition-all duration-300 hover:shadow-[0_20px_44px_-16px_rgba(131,44,219,0.2)]">
                    <div className="gbc-inner bg-gray-50 dark:bg-gray-900 p-6 relative overflow-hidden">
                      <span className="pointer-events-none select-none absolute ltr:right-1 rtl:left-1 bottom-1 text-[5rem] font-black leading-none text-gray-900/[0.04] dark:text-white/[0.04]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="relative z-10 flex items-center gap-3 mb-5">
                        <div className={`w-11 h-11 rounded-xl ${cfg.color.bg} border ${cfg.color.border} flex items-center justify-center flex-shrink-0`}>
                          <Icon weight="Bold" className={`w-5 h-5 ${cfg.color.icon}`} />
                        </div>
                        <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 shadow-primary ring-2 ring-gray-50 dark:ring-gray-900">
                          <span className="text-[10px] font-black text-white leading-none">{i + 1}</span>
                        </div>
                      </div>
                      <p className="relative z-10 text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2">{step}</p>
                      <p className="relative z-10 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        {isAr ? cfg.subtitleAr : cfg.subtitleEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
