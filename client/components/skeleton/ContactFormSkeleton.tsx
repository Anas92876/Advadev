import { Sk } from './Sk';
import { InputSkeleton } from './InputSkeleton';
import { ButtonSkeleton } from './ButtonSkeleton';

/**
 * Matches the Contact page 2-column layout:
 * - Left col (lg:w-80 xl:w-96): dark sidebar with contact info + promo card
 * - Right col (flex-1): gbc-wrap form card with 5 inputs + submit
 */
export function ContactFormSkeleton() {
  return (
    <div className="relative py-20 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Dark sidebar ── */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="rounded-2xl bg-gray-900 p-8 space-y-7">
              {/* Contact info header */}
              <Sk className="h-6 w-40 mb-2" />
              {/* 3 contact items */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Sk className="w-10 h-10 flex-shrink-0" rounded="rounded-xl" />
                  <div className="flex-1 space-y-1.5">
                    <Sk className="h-3 w-20" />
                    <Sk className="h-4 w-36" />
                  </div>
                </div>
              ))}
              {/* Divider */}
              <div className="h-px bg-gray-800" />
              {/* Promo card placeholder */}
              <div className="rounded-[20px] p-px bg-gray-700">
                <div className="rounded-[19px] bg-gray-800 p-5 space-y-2">
                  <Sk className="h-5 w-32" />
                  <Sk className="h-4 w-full" />
                  <Sk className="h-4 w-3/4" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Form card ── */}
          <div className="flex-1 min-w-0">
            <div className="rounded-[20px] p-px bg-gray-200 dark:bg-gray-800">
              <div className="rounded-[19px] bg-white dark:bg-gray-900 p-7 sm:p-10 space-y-5">
                {/* Form title */}
                <Sk className="h-7 w-48 mb-2" />
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputSkeleton />
                  <InputSkeleton />
                </div>
                {/* Email */}
                <InputSkeleton />
                {/* Project type select */}
                <InputSkeleton />
                {/* Message textarea */}
                <div className="space-y-1.5">
                  <Sk className="h-4 w-20" />
                  <Sk className="h-32 w-full" rounded="rounded-xl" />
                </div>
                {/* Submit + trust line */}
                <div className="flex flex-col items-start gap-3 pt-1">
                  <ButtonSkeleton width="w-36" rounded="rounded-xl" />
                  <Sk className="h-3.5 w-56" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
