import { Sk } from './Sk';

export function InputSkeleton() {
  return (
    <div className="space-y-1.5">
      {/* Label */}
      <Sk className="h-4 w-24" />
      {/* Input field */}
      <Sk className="h-11 w-full" rounded="rounded-xl" />
    </div>
  );
}
