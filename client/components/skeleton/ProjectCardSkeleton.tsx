import { Sk } from './Sk';

/**
 * Matches the full-bleed alternating project rows in the Portfolio page:
 * - py-24 lg:py-32 section
 * - lg: image side (~55%) | content side (~45%), alternating order
 * - Image: lg:h-[480px] with overlay
 * - Content: index num + title + desc + 3 tags + button
 */
interface ProjectCardSkeletonProps {
  /** Even index → image left; odd → image right */
  reverse?: boolean;
}

export function ProjectCardSkeleton({ reverse = false }: ProjectCardSkeletonProps) {
  return (
    <div className="py-24 lg:py-32 px-5 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>

          {/* Image block */}
          <div className="w-full lg:w-[55%] flex-shrink-0">
            <Sk className="w-full h-64 sm:h-80 lg:h-[480px]" rounded="rounded-2xl" />
          </div>

          {/* Content block */}
          <div className="flex-1 min-w-0">
            {/* Index number */}
            <Sk className="h-8 w-16 mb-5" rounded="rounded-full" />
            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-4">
              <Sk className="w-12 h-12 flex-shrink-0" rounded="rounded-xl" />
              <Sk className="h-8 w-48 sm:w-64" />
            </div>
            {/* Description — 3 lines */}
            <Sk className="h-4 w-full mb-2" />
            <Sk className="h-4 w-full mb-2" />
            <Sk className="h-4 w-3/4 mb-6" />
            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Sk className="h-6 w-20" rounded="rounded-full" />
              <Sk className="h-6 w-24" rounded="rounded-full" />
              <Sk className="h-6 w-16" rounded="rounded-full" />
            </div>
            {/* Button */}
            <Sk className="h-12 w-36" rounded="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
