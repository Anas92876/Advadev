import { Sk } from './Sk';

/**
 * Matches the CTA section used at the bottom of all pages:
 * - bg-gray-950 with dot grid
 * - h2 + subtitle + 2 buttons (inline on sm+)
 */
interface CtaSkeletonProps {
  /** Homepage CTA is centered; inner pages may be horizontal split */
  variant?: 'centered' | 'split';
}

export function CtaSkeleton({ variant = 'centered' }: CtaSkeletonProps) {
  const isCentered = variant === 'centered';
  return (
    <div className="relative py-24 lg:py-36 bg-gray-950 px-5 sm:px-6 lg:px-8">
      <div className={`max-w-${isCentered ? '4xl' : '6xl'} mx-auto`}>
        <div className={`flex flex-col ${isCentered ? 'items-center text-center' : 'lg:flex-row lg:items-center lg:justify-between'} gap-8`}>
          <div className={isCentered ? 'flex flex-col items-center' : 'max-w-xl'}>
            {/* Heading */}
            <Sk className={`h-10 sm:h-12 mb-3 ${isCentered ? 'w-72 sm:w-96' : 'w-full'}`} />
            {isCentered && <Sk className="h-10 sm:h-12 w-56 sm:w-72 mb-4" />}
            {/* Subtitle */}
            <Sk className={`h-5 ${isCentered ? 'w-64 sm:w-80 mb-10' : 'w-full max-w-sm'}`} />
          </div>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Sk className="h-14 w-40" rounded="rounded-xl" />
            <Sk className="h-14 w-36" rounded="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
