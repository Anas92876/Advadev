import { Sk } from './Sk';

/**
 * Matches the gbc-wrap service cards used on homepage and services page:
 * - 1px gradient border wrapper → inner bg-gray-50 dark:bg-gray-900, p-7
 * - Icon badge (w-12 h-12) → title → 3-line desc → CTA text
 */
export function ServiceCardSkeleton() {
  return (
    /* Mimic the 1px gradient border of gbc-wrap */
    <div className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-800 h-full">
      <div className="rounded-[19px] bg-gray-50 dark:bg-gray-900 p-7 h-full">
        {/* Icon */}
        <Sk className="w-12 h-12 mb-5" rounded="rounded-xl" />
        {/* Title */}
        <Sk className="h-6 w-48 mb-3" />
        {/* Description — 3 lines */}
        <Sk className="h-4 w-full mb-2" />
        <Sk className="h-4 w-full mb-2" />
        <Sk className="h-4 w-3/4 mb-5" />
        {/* Hover CTA placeholder */}
        <Sk className="h-4 w-28" />
      </div>
    </div>
  );
}
