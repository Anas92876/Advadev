import type { ReactNode } from 'react';

/**
 * Reusable grid wrapper that maps a count to repeated skeleton children.
 * Follows atomic design — purely structural, no visual opinion of its own.
 *
 * Usage:
 *   <GridSkeleton count={8} cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
 *     {(i) => <ServiceCardSkeleton key={i} />}
 *   </GridSkeleton>
 */
interface GridSkeletonProps {
  count: number;
  cols?: string;
  gap?: string;
  className?: string;
  children: (index: number) => ReactNode;
}

export function GridSkeleton({
  count,
  cols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  gap = 'gap-5 lg:gap-6',
  className = '',
  children,
}: GridSkeletonProps) {
  return (
    <div className={`grid ${cols} ${gap} ${className}`}>
      {Array.from({ length: count }).map((_, i) => children(i))}
    </div>
  );
}
