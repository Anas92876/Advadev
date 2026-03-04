/**
 * app/loading.tsx — Homepage skeleton
 *
 * Next.js App Router automatically renders this file while the page
 * suspense boundary is pending. Zero layout shift — every section
 * mirrors the real page's spacing and structure exactly.
 */
import { HeroSkeleton } from '@/components/skeleton/HeroSkeleton';
import { SectionTitleSkeleton } from '@/components/skeleton/SectionTitleSkeleton';
import { ServiceCardSkeleton } from '@/components/skeleton/ServiceCardSkeleton';
import { MetricCardSkeleton } from '@/components/skeleton/MetricCardSkeleton';
import { StepCardSkeleton } from '@/components/skeleton/StepCardSkeleton';
import { GridSkeleton } from '@/components/skeleton/GridSkeleton';
import { CtaSkeleton } from '@/components/skeleton/CtaSkeleton';
import { Sk } from '@/components/skeleton/Sk';

export default function HomeLoading() {
  return (
    <div aria-busy="true" aria-label="Loading page">

      {/* ── Hero ── */}
      <HeroSkeleton />

      {/* ── Services section ── */}
      <section className="relative py-28 lg:py-36 bg-gray-100 dark:bg-gray-950 overflow-hidden px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitleSkeleton />
          <GridSkeleton count={3} cols="grid-cols-1 md:grid-cols-3" gap="gap-6 lg:gap-7" className="mb-12">
            {(i) => <ServiceCardSkeleton key={i} />}
          </GridSkeleton>
          {/* "Explore All" button */}
          <Sk className="h-10 w-44" rounded="rounded-xl" />
        </div>
      </section>

      {/* ── Why Advadev (dark) ── */}
      <section className="relative py-28 lg:py-36 bg-gray-950 overflow-hidden px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitleSkeleton centered withSubtitle />
          <GridSkeleton count={4} cols="grid-cols-1 sm:grid-cols-2" gap="gap-5">
            {(i) => <MetricCardSkeleton key={i} />}
          </GridSkeleton>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="relative py-28 lg:py-36 bg-gray-100 dark:bg-gray-950 overflow-hidden px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Split header: title left + subtitle right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-16">
            <div className="max-w-xl space-y-4">
              <Sk className="h-6 w-24" rounded="rounded-full" />
              <Sk className="h-10 sm:h-12 w-64 sm:w-80" />
            </div>
            <Sk className="h-5 w-64 lg:w-72" />
          </div>
          <GridSkeleton count={5} cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-5" gap="gap-5">
            {(i) => <StepCardSkeleton key={i} />}
          </GridSkeleton>
        </div>
      </section>

      {/* ── CTA (dark) ── */}
      <CtaSkeleton variant="centered" />

    </div>
  );
}
