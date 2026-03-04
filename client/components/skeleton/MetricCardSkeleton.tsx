import { Sk } from './Sk';

/**
 * Matches the dark 2×2 metric cards in the "Why Advadev" section:
 * - gbc-wrap on bg-gray-950 → gbc-inner bg-gray-900, p-8
 * - Icon (w-12 h-12) → large metric number → title → desc line
 */
export function MetricCardSkeleton() {
  return (
    <div className="rounded-[20px] p-px bg-gray-700/60 dark:bg-gray-700">
      <div className="rounded-[19px] bg-gray-900 p-8">
        {/* Icon */}
        <Sk className="w-12 h-12 mb-7" rounded="rounded-xl" />
        {/* Large metric — text-5xl sm:text-6xl */}
        <Sk className="h-14 sm:h-16 w-36 sm:w-44 mb-3" />
        {/* Reason title */}
        <Sk className="h-5 w-4/5 mb-2" />
        {/* Supporting desc */}
        <Sk className="h-4 w-full" />
      </div>
    </div>
  );
}
