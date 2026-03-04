import { Sk } from './Sk';

interface ButtonSkeletonProps {
  width?: string;
  rounded?: string;
}

export function ButtonSkeleton({
  width = 'w-36',
  rounded = 'rounded-xl',
}: ButtonSkeletonProps) {
  return <Sk className={`h-11 ${width}`} rounded={rounded} />;
}
