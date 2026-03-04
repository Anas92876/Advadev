import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services - Web Development, Automation & Custom Apps | Advadev",
  description:
    "Expert web development, business automation, and custom application services. We build modern, scalable solutions with Next.js, React, TypeScript, and cutting-edge technologies.",
  keywords: [
    "web development services",
    "business automation",
    "custom application development",
    "Next.js development",
    "React development",
    "TypeScript",
    "SaaS development",
    "API integration",
    "workflow automation",
  ],
  openGraph: {
    title: "Professional Digital Services | Advadev",
    description:
      "Web development, business automation, and custom applications built with modern technologies.",
    type: "website",
    url: "https://advadev.com/services",
    siteName: "Advadev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Advadev",
    description:
      "Expert web development, business automation, and custom application services.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
