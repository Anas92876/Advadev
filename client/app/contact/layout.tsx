import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Get Started with Your Project | Advadev",
  description:
    "Ready to transform your business? Contact Advadev for a free consultation. We respond within 24 hours to discuss your web development, automation, or custom application needs.",
  keywords: [
    "contact advadev",
    "web development consultation",
    "project inquiry",
    "get a quote",
    "hire developers",
    "business automation consultation",
    "custom software inquiry",
    "free consultation",
  ],
  openGraph: {
    title: "Contact Advadev - Start Your Project Today",
    description:
      "Get in touch for a free consultation. We respond within 24 hours to discuss your project.",
    type: "website",
    url: "https://advadev.com/contact",
    siteName: "Advadev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Advadev",
    description: "Start your project today. Free consultation, 24-hour response time.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
