/**
 * app/portfolio/loading.tsx — Portfolio page skeleton
 *
 * Mirrors: dark hero (asymmetric w/ count badge) →
 * py-20 section with 4 alternating gbc-wrap project cards →
 * dark CTA
 */
import { CtaSkeleton } from '@/components/skeleton/CtaSkeleton';
import { Sk } from '@/components/skeleton/Sk';

function ProjectRowSkeleton({ reverse }: { reverse: boolean }) {
  return (
    <div className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-700">
      <div className="rounded-[19px] bg-white dark:bg-gray-900 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image side */}
          <div className={`relative min-h-[300px] lg:min-h-[360px] ${reverse ? 'lg:order-2' : ''}`}>
            <Sk className="absolute inset-0 w-full h-full" rounded="rounded-none" />
          </div>
          {/* Content side */}
          <div className={`p-8 lg:p-10 flex flex-col justify-center gap-5 ${reverse ? 'lg:order-1' : ''}`}>
            {/* Project index + divider + icon */}
            <div className="flex items-center gap-3">
              <Sk className="h-3.5 w-20" />
              <Sk className="w-8 h-px" rounded="rounded-none" />
              <Sk className="w-8 h-8 flex-shrink-0" rounded="rounded-lg" />
            </div>
            {/* Title */}
            <Sk className="h-8 w-56" />
            {/* Description */}
            <div className="space-y-2">
              <Sk className="h-4 w-full" />
              <Sk className="h-4 w-full" />
              <Sk className="h-4 w-2/3" />
            </div>
            {/* Tag pills */}
            <div className="flex flex-wrap gap-2">
              <Sk className="h-6 w-20" rounded="rounded-lg" />
              <Sk className="h-6 w-24" rounded="rounded-lg" />
              <Sk className="h-6 w-16" rounded="rounded-lg" />
            </div>
            {/* Link */}
            <Sk className="h-4 w-36" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioLoading() {
  return (
    <div aria-busy="true" aria-label="Loading page">

      {/* Dark hero — centered: badge + title + subtitle + industry tag pills */}
      <div className="relative bg-gray-950 pt-28 pb-24 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Badge pill */}
          <Sk className="h-6 w-20 mb-7" rounded="rounded-full" />
          {/* Title */}
          <Sk className="h-12 sm:h-14 w-3/4 max-w-xl mb-4" />
          <Sk className="h-12 sm:h-14 w-1/2 max-w-sm mb-7" />
          {/* Subtitle */}
          <Sk className="h-5 w-full max-w-md mb-2" />
          <Sk className="h-5 w-2/3 max-w-xs mb-8" />
          {/* Industry tag pills */}
          <div className="flex flex-wrap justify-center gap-2">
            <Sk className="h-7 w-24" rounded="rounded-full" />
            <Sk className="h-7 w-32" rounded="rounded-full" />
            <Sk className="h-7 w-36" rounded="rounded-full" />
            <Sk className="h-7 w-28" rounded="rounded-full" />
          </div>
        </div>
      </div>

      {/* 4 alternating project row cards */}
      <div className="relative py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProjectRowSkeleton key={i} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <CtaSkeleton variant="centered" />

    </div>
  );
}
