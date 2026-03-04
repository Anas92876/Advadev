import { Sk } from './Sk';

interface SectionTitleSkeletonProps {
  /** Center-align (for Why/How sections) vs left-align (for Services) */
  centered?: boolean;
  /** Include a subtitle line below the heading */
  withSubtitle?: boolean;
  className?: string;
}

export function SectionTitleSkeleton({
  centered = false,
  withSubtitle = false,
  className = '',
}: SectionTitleSkeletonProps) {
  return (
    <div
      className={[
        'mb-16',
        centered ? 'flex flex-col items-center text-center' : 'max-w-2xl',
        className,
      ].join(' ')}
    >
      {/* Badge pill */}
      <Sk className="h-6 w-24 mb-5" rounded="rounded-full" />
      {/* Heading line 1 */}
      <Sk className={`h-10 sm:h-12 mb-3 ${centered ? 'w-72 sm:w-[480px]' : 'w-full max-w-xl'}`} />
      {/* Heading line 2 */}
      <Sk className={`h-10 sm:h-12 ${centered ? 'w-56 sm:w-80' : 'w-4/5 max-w-sm'}`} />
      {withSubtitle && (
        <Sk className="h-5 w-64 sm:w-80 mt-4" />
      )}
    </div>
  );
}
