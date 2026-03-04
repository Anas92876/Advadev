import { Sk } from './Sk';

/**
 * Matches the About page layout:
 * - Stats strip (3 gbc-wrap cards, -mt-10 overlapping dark hero)
 * - 2-col story section: left timeline + right quote card
 * - Industry cards row (3 cards)
 */
export function AboutContentSkeleton() {
  return (
    <>
      {/* ── Stats strip — overlaps dark hero with -mt-10 ── */}
      <div className="relative -mt-10 pb-20 px-5 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-800">
                <div className="rounded-[19px] bg-white dark:bg-gray-900 p-6 text-center flex flex-col items-center gap-2">
                  <Sk className="h-10 w-24" />
                  <Sk className="h-4 w-32" />
                </div>
              </div>
            ))}
          </div>

          {/* ── Story + Quote 2-col ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
            {/* Left: vertical timeline (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-10">
              {/* Section header */}
              <div className="mb-6">
                <Sk className="h-6 w-20 mb-5" rounded="rounded-full" />
                <Sk className="h-9 w-64 mb-2" />
                <Sk className="h-9 w-48" />
              </div>
              {/* 3 timeline entries */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-5">
                  {/* Timeline dot + line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <Sk className="w-9 h-9" rounded="rounded-full" />
                    {i < 2 && <div className="w-px flex-1 mt-2 bg-gray-200 dark:bg-gray-800 min-h-[3rem]" />}
                  </div>
                  {/* Text */}
                  <div className="flex-1 pt-1 space-y-2 pb-4">
                    <Sk className="h-4 w-full" />
                    <Sk className="h-4 w-full" />
                    <Sk className="h-4 w-3/4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Right: quote card (lg:col-span-2) */}
            <div className="lg:col-span-2">
              <div className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-800 h-full">
                <div className="rounded-[19px] bg-gray-50 dark:bg-gray-900 p-8 h-full flex flex-col gap-5">
                  <Sk className="h-6 w-28" rounded="rounded-full" />
                  <Sk className="h-7 w-full" />
                  <Sk className="h-7 w-5/6" />
                  <Sk className="h-7 w-4/5" />
                  <div className="mt-auto space-y-2">
                    <Sk className="h-4 w-full" />
                    <Sk className="h-4 w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Industry cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-800">
                <div className="rounded-[19px] bg-white dark:bg-gray-900 p-7">
                  <Sk className="w-12 h-12 mb-5" rounded="rounded-xl" />
                  <Sk className="h-5 w-36 mb-4" />
                  <div className="space-y-2">
                    <Sk className="h-3.5 w-full" />
                    <Sk className="h-3.5 w-full" />
                    <Sk className="h-3.5 w-3/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
