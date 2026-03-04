import { Sk } from './Sk';

/**
 * Matches the dark hero banner used on inner pages
 * (Services, About, Contact):
 * - bg-gray-950, pt-28 pb-varies
 * - badge + h1 + subtitle — all centered (matching real pages)
 */
interface DarkHeroSkeletonProps {
  /** pb class — varies per page */
  pb?: string;
}

export function DarkHeroSkeleton({ pb = 'pb-36' }: DarkHeroSkeletonProps) {
  return (
    <div
      aria-busy="true"
      aria-label="Loading"
      className={`relative bg-gray-950 pt-28 ${pb} px-5 sm:px-6 lg:px-8 overflow-hidden`}
    >
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Badge pill */}
        <Sk className="h-6 w-20 mb-7" rounded="rounded-full" />
        {/* h1 — one or two lines */}
        <Sk className="h-12 sm:h-14 lg:h-16 w-3/4 max-w-xl mb-4" />
        <Sk className="h-12 sm:h-14 lg:h-16 w-1/2 max-w-sm mb-7" />
        {/* Subtitle */}
        <Sk className="h-5 w-full max-w-md mb-2" />
        <Sk className="h-5 w-2/3 max-w-xs" />
      </div>
    </div>
  );
}
