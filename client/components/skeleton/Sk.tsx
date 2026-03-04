/**
 * Sk — base skeleton atom.
 *
 * Renders a single shimmer block using a pure Tailwind background-position
 * animation. No external libraries, no ::before hacks, no hydration risk.
 *
 * Usage:
 *   <Sk className="h-6 w-40" />
 *   <Sk className="h-12 w-12" rounded="rounded-full" />
 */
interface SkProps {
  className?: string;
  rounded?: string;
}

export function Sk({ className = '', rounded = 'rounded-lg' }: SkProps) {
  return (
    <div
      aria-hidden="true"
      className={[
        rounded,
        'bg-[length:300%_100%]',
        'bg-gradient-to-r',
        'from-gray-200 via-gray-100 to-gray-200',
        'dark:from-gray-800 dark:via-gray-700/50 dark:to-gray-800',
        'animate-shimmer',
        className,
      ].join(' ')}
    />
  );
}
