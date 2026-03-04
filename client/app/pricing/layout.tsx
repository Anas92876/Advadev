import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Transparent Plans for Every Business | Advadev',
  description:
    'Choose the perfect plan for your business. Transparent pricing for web development, automation, and custom applications. Plus, Pro, and Complete plans available.',
  keywords: [
    'pricing',
    'web development pricing',
    'automation pricing',
    'SaaS pricing',
    'development plans',
    'transparent pricing',
    'subscription plans',
  ],
  openGraph: {
    title: 'Pricing Plans | Advadev',
    description:
      'Transparent pricing for premium web development and automation solutions. Choose from Plus, Pro, or Complete plans.',
    type: 'website',
    url: 'https://advadev.com/pricing',
    siteName: 'Advadev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing Plans | Advadev',
    description:
      'Premium web development and automation solutions with transparent pricing.',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
