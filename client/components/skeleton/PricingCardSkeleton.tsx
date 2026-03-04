import { Sk } from './Sk';

/**
 * Matches the pricing layout:
 * - Left: featured tall billboard (lg:w-[340px] xl:w-[370px])
 * - Right: 3 horizontal row cards stacked
 * - Bottom: trust strip 4-column grid
 */
export function PricingCardSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 items-stretch">

      {/* ── Featured plan billboard ── */}
      <div className="lg:w-[340px] xl:w-[370px] flex-shrink-0">
        <div className="rounded-[20px] p-px bg-gray-700/60 dark:bg-gray-700 h-full">
          <div className="rounded-[19px] bg-gray-900 flex flex-col min-h-[560px] overflow-hidden h-full">
            {/* "Most popular" banner */}
            <div className="px-5 py-3 bg-gray-800 border-b border-gray-700">
              <Sk className="h-4 w-32 mx-auto" />
            </div>
            <div className="p-7 flex flex-col flex-1">
              {/* Icon */}
              <Sk className="w-14 h-14 mb-5" rounded="rounded-2xl" />
              {/* Plan label */}
              <Sk className="h-3.5 w-24 mb-3" />
              {/* Price */}
              <Sk className="h-10 w-48 mb-2" />
              {/* Accent stripe */}
              <Sk className="h-0.5 w-14 mb-7" />
              {/* Features list */}
              <div className="flex-1 space-y-3.5 mb-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Sk className="w-5 h-5 flex-shrink-0" rounded="rounded-full" />
                    <Sk className="h-4 flex-1" />
                  </div>
                ))}
              </div>
              {/* CTA */}
              <Sk className="h-12 w-full" rounded="rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* ── 3 horizontal row cards ── */}
      <div className="flex-1 flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-800 flex-1">
            <div className="rounded-[19px] bg-white dark:bg-gray-900 overflow-hidden h-full flex flex-col">
              {/* Accent stripe */}
              <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700" />
              <div className="px-5 sm:px-7 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 flex-1">
                {/* Plan number */}
                <Sk className="hidden md:block h-12 w-12" />
                {/* Icon + name */}
                <div className="flex items-center gap-3.5 sm:min-w-[175px]">
                  <Sk className="w-11 h-11 flex-shrink-0" rounded="rounded-xl" />
                  <div className="space-y-1.5">
                    <Sk className="h-4 w-28" />
                    <Sk className="h-0.5 w-5" />
                  </div>
                </div>
                {/* Feature pills */}
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <Sk key={j} className="h-6 w-20" rounded="rounded-full" />
                  ))}
                </div>
                {/* Price + CTA */}
                <div className="flex items-center gap-3 sm:gap-4 ms-auto flex-shrink-0">
                  <Sk className="h-7 w-24" />
                  <Sk className="h-10 w-24" rounded="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
