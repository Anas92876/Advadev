/**
 * app/pricing/loading.tsx — Pricing page skeleton
 *
 * Mirrors: dark hero (centered, tall pb-52) →
 * -mt-28 overlap → featured billboard + 3 row cards + trust strip →
 * CTA (split layout)
 */
import { PricingCardSkeleton } from '@/components/skeleton/PricingCardSkeleton';
import { CtaSkeleton } from '@/components/skeleton/CtaSkeleton';
import { Sk } from '@/components/skeleton/Sk';

export default function PricingLoading() {
  return (
    <div aria-busy="true" aria-label="Loading page">

      {/* Dark hero — centered, deeper pb to allow card overlap */}
      <div className="relative bg-gray-950 pt-28 pb-52 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge pill */}
          <Sk className="h-6 w-24 mx-auto mb-8" rounded="rounded-full" />
          {/* Headline — extra-large */}
          <Sk className="h-14 sm:h-16 lg:h-[4.5rem] w-72 sm:w-96 mx-auto mb-5" />
          {/* Sub */}
          <Sk className="h-5 w-64 mx-auto" />
        </div>
      </div>

      {/* Plans — overlap with -mt-28 */}
      <div className="relative -mt-28 pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <PricingCardSkeleton />

          {/* Trust strip — 4-col divided grid */}
          <div className="mt-8 rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-900/60 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x divide-gray-200/80 dark:divide-gray-800">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center gap-2.5 px-6 py-4">
                  <Sk className="h-4 w-4 flex-shrink-0" rounded="rounded-full" />
                  <Sk className="h-4 w-28" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA — editorial horizontal split */}
      <CtaSkeleton variant="split" />

    </div>
  );
}
