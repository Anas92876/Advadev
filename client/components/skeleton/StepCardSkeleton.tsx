import { Sk } from './Sk';

/**
 * Matches the 5-column step cards in the "How We Work" section:
 * - gbc-wrap → gbc-inner bg-gray-50 dark:bg-gray-900, p-6
 * - Icon (w-11 h-11) + numbered dot (w-6 h-6) pair
 * - Step title → subtitle (2 lines)
 */
export function StepCardSkeleton() {
  return (
    <div className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-800 h-full">
      <div className="rounded-[19px] bg-gray-50 dark:bg-gray-900 p-6 h-full">
        {/* Icon + dot pair */}
        <div className="flex items-center gap-3 mb-5">
          <Sk className="w-11 h-11 flex-shrink-0" rounded="rounded-xl" />
          <Sk className="w-6 h-6 flex-shrink-0" rounded="rounded-full" />
        </div>
        {/* Step title */}
        <Sk className="h-4 w-full mb-2" />
        <Sk className="h-4 w-4/5 mb-3" />
        {/* Subtitle */}
        <Sk className="h-3.5 w-full mb-1.5" />
        <Sk className="h-3.5 w-3/4" />
      </div>
    </div>
  );
}
