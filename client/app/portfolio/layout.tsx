import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Portfolio - Successful Projects & Case Studies | Advadev",
  description:
    "Explore our portfolio of successful web development, automation, and custom application projects. Real results for real businesses across various industries.",
  keywords: [
    "portfolio",
    "case studies",
    "web development projects",
    "automation projects",
    "SaaS applications",
    "e-commerce development",
    "custom software",
    "project showcase",
  ],
  openGraph: {
    title: "Portfolio & Case Studies | Advadev",
    description:
      "Explore successful projects and real results we have delivered for businesses.",
    type: "website",
    url: "https://advadev.com/portfolio",
    siteName: "Advadev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Advadev",
    description: "Real projects, real results. Explore our successful case studies.",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
