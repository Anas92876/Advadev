import Link from 'next/link';
import { ArrowRight, Bell, AltArrowRight } from '@solar-icons/react/ssr';
import type { Lang } from '@/lib/locale';

export default function TechHeroSection({ lang }: { lang: Lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="relative bg-white dark:bg-gray-950 flex flex-col items-center overflow-hidden pt-20 pb-24 px-5 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary-600/[0.04] dark:bg-primary-600/[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* ── Announcement Badge ── */}
        <div
          className="hero-reveal inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 text-[10px] sm:text-xs font-medium mb-8 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default group"
          style={{ animationDelay: '0.05s' }}
        >
          <Bell weight="Bold" className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500 flex-shrink-0" />
          <span>
            {isAr
              ? 'خدماتنا الرقمية الجديدة متاحة الآن'
              : 'Our new digital services are now available'}
          </span>
          <span className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
          <Link
            href="/services"
            className="flex items-center gap-0.5 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-500 transition-colors duration-200"
          >
            {isAr ? 'اكتشف' : 'Learn More'}
            <AltArrowRight weight="Bold" className="w-3 h-3 sm:w-3.5 sm:h-3.5 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* ── Main Heading ── */}
        <h1
          className="hero-reveal font-bold tracking-tight leading-[1.08] mb-6"
          style={{ animationDelay: '0s', fontSize: 'clamp(1.8rem, 7vw, 4.5rem)' }}
        >
          <span className="block text-gray-900 dark:text-white">
            {isAr ? 'أطلق عملك الرقمي' : 'Launch Your Digital Business'}
          </span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #832cdb 0%, #a855f7 48%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {isAr ? 'بسرعة وكفاءة' : 'Fast & Efficiently'}
          </span>
          <span className="block text-gray-900 dark:text-white">
            {isAr ? 'خلال أيام لا أشهر' : 'In Days, Not Months'}
          </span>
        </h1>

        {/* ── Subheading ── */}
        <p
          className="hero-reveal text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-10"
          style={{ animationDelay: '0.28s' }}
        >
          {isAr
            ? 'نحن في Advadev نساعد التجار والشركات على الانتقال من الفوضى والطلبات اليدوية إلى نظام رقمي منظم وسهل الاستخدام.'
            : 'At Advadev, we help businesses move from manual work to organized, easy-to-use digital systems.'}
        </p>

        {/* ── CTA Button ── */}
        <div className="hero-reveal" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-primary hover:shadow-primary-lg hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.98]"
          >
            {isAr ? 'اطلب استشارة مجانية' : 'Get Free Consultation'}
            <ArrowRight weight="Bold" className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
