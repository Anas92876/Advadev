/**
 * app/services/loading.tsx — Services page skeleton
 *
 * Mirrors: dark hero → 3 alternating service sections →
 * additional services dark grid → CTA
 */
import { DarkHeroSkeleton } from '@/components/skeleton/DarkHeroSkeleton';
import { ServiceCardSkeleton } from '@/components/skeleton/ServiceCardSkeleton';
import { GridSkeleton } from '@/components/skeleton/GridSkeleton';
import { CtaSkeleton } from '@/components/skeleton/CtaSkeleton';
import { Sk } from '@/components/skeleton/Sk';

function ServiceSectionSkeleton({ even }: { even: boolean }) {
  return (
    <div
      className={`relative py-28 px-5 sm:px-6 lg:px-8 overflow-hidden ${
        even ? 'bg-gray-100 dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900/40'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${even ? '' : 'lg:flex-row-reverse'}`}>
          {/* Content side */}
          <div className="flex-1 min-w-0 space-y-5">
            {/* Badge */}
            <Sk className="h-6 w-20" rounded="rounded-full" />
            {/* Title */}
            <Sk className="h-9 w-72 sm:w-80" />
            {/* Desc */}
            <Sk className="h-4 w-full" />
            <Sk className="h-4 w-full" />
            <Sk className="h-4 w-3/4" />
            {/* Feature checklist */}
            <div className="space-y-2.5 pt-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Sk className="w-5 h-5 flex-shrink-0" rounded="rounded-full" />
                  <Sk className="h-4 flex-1 max-w-[200px]" />
                </div>
              ))}
            </div>
            {/* Button */}
            <Sk className="h-12 w-40 mt-2" rounded="rounded-xl" />
          </div>
          {/* Visual panel side */}
          <div className="lg:w-[45%] flex-shrink-0">
            <div className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-700">
              <div className="rounded-[19px] bg-gray-50 dark:bg-gray-950 p-8 min-h-[320px] lg:min-h-[420px]">
                {/* Metric badges */}
                <div className="flex gap-3 mb-6">
                  <Sk className="h-8 w-28" rounded="rounded-full" />
                  <Sk className="h-8 w-28" rounded="rounded-full" />
                </div>
                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Sk key={i} className="h-7 w-28" rounded="rounded-xl" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesLoading() {
  return (
    <div aria-busy="true" aria-label="Loading page">

      {/* Dark hero with deeper pb to account for -mt-14 overlap */}
      <DarkHeroSkeleton pb="pb-48" />

      {/* 3 alternating service sections (overlap starts with -mt-14) */}
      <div className="-mt-14">
        {Array.from({ length: 3 }).map((_, i) => (
          <ServiceSectionSkeleton key={i} even={i % 2 === 0} />
        ))}
      </div>

      {/* Additional services — always dark */}
      <div className="relative py-24 px-5 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 space-y-3">
            <Sk className="h-8 w-40 mx-auto" />
            <Sk className="h-5 w-64 mx-auto" />
          </div>
          <GridSkeleton count={8} cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" gap="gap-4">
            {(i) => (
              <div key={i} className="rounded-[20px] p-px bg-gray-700">
                <div className="rounded-[19px] bg-gray-900 p-5">
                  <Sk className="w-10 h-10 mb-4" rounded="rounded-xl" />
                  <Sk className="h-5 w-36 mb-2" />
                  <Sk className="h-3.5 w-full mb-1.5" />
                  <Sk className="h-3.5 w-3/4" />
                </div>
              </div>
            )}
          </GridSkeleton>
        </div>
      </div>

      {/* CTA */}
      <CtaSkeleton variant="centered" />

    </div>
  );
}
