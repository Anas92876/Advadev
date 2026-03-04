'use client';

import dynamic from 'next/dynamic';
import type { Lang } from '@/lib/locale';

const ServicesSection = dynamic(() => import('./sections/ServicesSection'), { ssr: false });
const WhySection      = dynamic(() => import('./sections/WhySection'),      { ssr: false });
const HowSection      = dynamic(() => import('./sections/HowSection'),      { ssr: false });
const CtaSection      = dynamic(() => import('./sections/CtaSection'),      { ssr: false });

export default function HomeSections({ lang }: { lang: Lang }) {
  return (
    <>
      <ServicesSection lang={lang} />
      <WhySection      lang={lang} />
      <HowSection      lang={lang} />
      <CtaSection      lang={lang} />
    </>
  );
}
