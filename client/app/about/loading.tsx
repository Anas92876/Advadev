/**
 * app/about/loading.tsx — About page skeleton
 *
 * Mirrors: dark hero → -mt-10 stats strip (3 cards) →
 * story section (timeline + quote card + mini stats) →
 * "Worked With" 3-col grid → CTA
 */
import { DarkHeroSkeleton } from '@/components/skeleton/DarkHeroSkeleton';
import { AboutContentSkeleton } from '@/components/skeleton/AboutContentSkeleton';
import { CtaSkeleton } from '@/components/skeleton/CtaSkeleton';

export default function AboutLoading() {
  return (
    <div aria-busy="true" aria-label="Loading page">

      {/* Dark hero */}
      <DarkHeroSkeleton pb="pb-24" />

      {/* Stats strip + story + worked-with sections */}
      <AboutContentSkeleton />

      {/* CTA */}
      <CtaSkeleton variant="centered" />

    </div>
  );
}
