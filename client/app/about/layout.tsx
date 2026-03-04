import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Our Story, Values & Team | Advadev",
  description:
    "Learn about Advadev, our mission to empower businesses with modern technology, our core values, and the experienced team behind successful digital solutions.",
  keywords: [
    "about advadev",
    "web development company",
    "our team",
    "company values",
    "our mission",
    "technology experts",
    "software development team",
    "digital agency",
  ],
  openGraph: {
    title: "About Advadev - Our Story & Team",
    description:
      "Meet the team dedicated to transforming businesses through modern technology and innovative solutions.",
    type: "website",
    url: "https://advadev.com/about",
    siteName: "Advadev",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Advadev",
    description: "Our story, values, and the team behind exceptional digital solutions.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
