import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

/**
 * Structured Data Component - Adds JSON-LD schema for SEO
 * Helps search engines understand your content better
 */
export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}

// Predefined schemas for reuse
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Advadev',
  url: 'https://advadev.com',
  logo: 'https://advadev.com/logo.svg',
  description: 'Professional web development and business automation solutions',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
    email: 'hello@advadev.com',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://github.com/advadev',
    'https://linkedin.com/company/advadev',
    'https://twitter.com/advadev',
  ],
};

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Advadev',
  url: 'https://advadev.com',
  description: 'Web Development & Business Automation Solutions',
  publisher: {
    '@type': 'Organization',
    name: 'Advadev',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://advadev.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Web Development',
  provider: {
    '@type': 'Organization',
    name: 'Advadev',
    url: 'https://advadev.com',
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Web Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Automation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Applications',
        },
      },
    ],
  },
};
