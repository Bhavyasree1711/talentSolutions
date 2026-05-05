import { Metadata } from 'next';

// Company Information
export const COMPANY_INFO = {
  name: 'DMX Talent Solutions Pvt Ltd',
  tagline: 'Partner in Modern HR Solutions',
  description: 'Leading HR consulting, staffing, recruitment, executive search, train & deploy, and technical training company serving clients across India.',
  website: 'https://www.dmxorg.com',
  address: {
    street: '10, 100 Feet Ring Rd, BTM 2nd Stage, 1st Floor',
    city: 'BTM Layout, Bengaluru',
    state: 'Karnataka',
    zipCode: '560076',
    country: 'India'
  },
  phones: ['+91 9247030111', '+91 7829121232'],
  email: 's.siddeswara@dmxorg.com',
  social: {
    linkedin: 'https://linkedin.com/company/dmx-talent-solutions',
    twitter: 'https://twitter.com/dmxorg',
    facebook: 'https://facebook.com/dmxorg'
  }
};

// SEO Constants
export const SEO_DEFAULTS = {
  title: `${COMPANY_INFO.name} — ${COMPANY_INFO.tagline}`,
  description: `${COMPANY_INFO.description} Expert HR consulting, IT staffing, executive search, and corporate training services in Bangalore, India.`,
  keywords: [
    'HR solutions company Bangalore',
    'IT staffing services India',
    'executive search firms Bangalore',
    'corporate training company Bangalore',
    'AWS cloud training with placement',
    'recruitment agency India',
    'staffing solutions Bangalore',
    'HR consulting services',
    'technical training Bangalore',
    'talent acquisition India'
  ].join(', '),
  authors: [{ name: 'DMX Talent Solutions Pvt Ltd' }],
  creator: 'DMX Talent Solutions Pvt Ltd',
  publisher: 'DMX Talent Solutions Pvt Ltd',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: COMPANY_INFO.name,
    title: `${COMPANY_INFO.name} — ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.description,
    images: [
      {
        url: '/images/dmx-logo.png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} Logo`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} — ${COMPANY_INFO.tagline}`,
    description: COMPANY_INFO.description,
    images: ['/images/dmx-logo.png'],
    creator: '@dmxorg'
  },
  alternates: {
    canonical: COMPANY_INFO.website
  }
};

// Generate SEO metadata for any page
export function generateSEOMetadata(
  pageTitle?: string,
  pageDescription?: string,
  pageKeywords?: string[],
  pageUrl?: string,
  pageImage?: string,
  structuredData?: any
): Metadata {
  const title = pageTitle ? `${pageTitle} | ${COMPANY_INFO.name}` : SEO_DEFAULTS.title;
  const description = pageDescription || SEO_DEFAULTS.description;
  const keywords = pageKeywords ? pageKeywords.join(', ') : SEO_DEFAULTS.keywords;
  const url = pageUrl ? `${COMPANY_INFO.website}${pageUrl}` : COMPANY_INFO.website;
  const image = pageImage || '/images/dmx-logo.png';

  return {
    title,
    description,
    keywords,
    authors: SEO_DEFAULTS.authors,
    creator: SEO_DEFAULTS.creator,
    publisher: SEO_DEFAULTS.publisher,
    robots: SEO_DEFAULTS.robots,
    metadataBase: new URL(COMPANY_INFO.website),
    alternates: {
      canonical: url
    },
    openGraph: {
      ...SEO_DEFAULTS.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${pageTitle || COMPANY_INFO.name} - ${COMPANY_INFO.tagline}`
        }
      ]
    },
    twitter: {
      ...SEO_DEFAULTS.twitter,
      title,
      description,
      images: [image]
    },
    other: structuredData ? {
      'application/ld+json': JSON.stringify(structuredData)
    } : undefined
  };
}

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.website,
    logo: `${COMPANY_INFO.website}/images/dmx-logo.png`,
    sameAs: [
      COMPANY_INFO.social.linkedin,
      COMPANY_INFO.social.twitter,
      COMPANY_INFO.social.facebook
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phones[0],
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zipCode,
      addressCountry: COMPANY_INFO.address.country
    },
    foundingDate: '2010',
    numberOfEmployees: '50-100'
  };
}

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: COMPANY_INFO.website,
    telephone: COMPANY_INFO.phones[0],
    email: COMPANY_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.zipCode,
      addressCountry: COMPANY_INFO.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9716',
      longitude: '77.5946'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    image: `${COMPANY_INFO.website}/images/dmx-logo.png`
  };
}

// Generate ProfessionalService Schema
export function generateProfessionalServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${serviceName} - ${COMPANY_INFO.name}`,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.website
    },
    serviceType: serviceName,
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      availableLanguage: {
        '@type': 'Language',
        name: 'English'
      }
    }
  };
}

// Generate Course Schema
export function generateCourseSchema(courseName: string, courseDescription: string, courseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description: courseDescription,
    provider: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.website
    },
    url: `${COMPANY_INFO.website}${courseUrl}`,
    inLanguage: 'English',
    courseMode: 'online',
    educationalCredentialAwarded: 'Certificate'
  };
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${COMPANY_INFO.website}${crumb.url}`
    }))
  };
}

// Utility function to create structured data for pages
export function createPageStructuredData(
  pageType: 'organization' | 'localBusiness' | 'professionalService' | 'course' | 'faq' | 'breadcrumb',
  options?: any
) {
  switch (pageType) {
    case 'organization':
      return generateOrganizationSchema();
    case 'localBusiness':
      return generateLocalBusinessSchema();
    case 'professionalService':
      return generateProfessionalServiceSchema(options.serviceName, options.serviceDescription);
    case 'course':
      return generateCourseSchema(options.courseName, options.courseDescription, options.courseUrl);
    case 'faq':
      return generateFAQSchema(options.faqs);
    case 'breadcrumb':
      return generateBreadcrumbSchema(options.breadcrumbs);
    default:
      return null;
  }
}