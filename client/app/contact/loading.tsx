/**
 * app/contact/loading.tsx — Contact page skeleton
 *
 * Mirrors: dark hero →
 * 3-col grid (sidebar: dark info card + quick links + promo |
 * form: gbc-wrap with 5 inputs + submit button)
 */
import { DarkHeroSkeleton } from '@/components/skeleton/DarkHeroSkeleton';
import { ContactFormSkeleton } from '@/components/skeleton/ContactFormSkeleton';

export default function ContactLoading() {
  return (
    <div aria-busy="true" aria-label="Loading page">

      {/* Dark hero */}
      <DarkHeroSkeleton pb="pb-24" />

      {/* Sidebar + form */}
      <ContactFormSkeleton />

    </div>
  );
}
