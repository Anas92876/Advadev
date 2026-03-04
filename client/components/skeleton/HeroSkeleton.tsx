import { Sk } from './Sk';

/**
 * Matches TechHeroSection exactly:
 * - bg-white / dark:bg-gray-950
 * - pt-20 pb-24, centered column layout
 * - badge pill → 3-line headline → subtitle → CTA button
 */
export function HeroSkeleton() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading"
      className="relative bg-white dark:bg-gray-950 flex flex-col items-center overflow-hidden pt-20 pb-24 px-5 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto w-full">
        {/* Announcement badge */}
        <Sk className="h-8 w-56 sm:w-64 mb-8" rounded="rounded-full" />

        {/* Headline — 3 stacked lines matching font-size clamp(2.5rem, 6vw, 4.5rem) */}
        <Sk className="h-14 sm:h-16 lg:h-20 w-72 sm:w-[420px] mb-3" />
        <Sk className="h-14 sm:h-16 lg:h-20 w-56 sm:w-80 mb-3" />
        <Sk className="h-14 sm:h-16 lg:h-20 w-64 sm:w-96 mb-6" />

        {/* Subtitle — text-lg sm:text-xl, max-w-2xl */}
        <Sk className="h-5 w-full max-w-lg mb-2.5" />
        <Sk className="h-5 w-4/5 max-w-md mb-10" />

        {/* CTA button — px-8 py-4 rounded-full */}
        <Sk className="h-14 w-44" rounded="rounded-full" />
      </div>
    </section>
  );
}
