import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes safely
 * Combines clsx for conditional classes and tailwind-merge to handle conflicts
 *
 * @param inputs - Class values to merge
 * @returns Merged className string
 *
 * @example
 * cn('px-4 py-2', 'bg-primary-600', isActive && 'bg-primary-700')
 * // Returns: 'px-4 py-2 bg-primary-700' (when isActive is true)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
