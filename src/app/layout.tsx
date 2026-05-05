import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { generateSEOMetadata, generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo";
import { StickyWhatsAppButton, StickyCallButton } from "@/components/seo/StickyButtons";
import { QuickEnquiryPopup } from "@/components/seo/QuickEnquiryPopup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...generateSEOMetadata(),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/dmx-logo.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/images/dmx-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code'
    }
  },
  category: 'business',
  classification: 'Human Resources, Staffing, Training',
  other: {
    'application/ld+json': JSON.stringify([
      generateOrganizationSchema(),
      generateLocalBusinessSchema()
    ]),
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0B1F3A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Additional meta tags for SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        <meta name="revisit-after" content="1 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <StickyWhatsAppButton />
        <StickyCallButton />
        <QuickEnquiryPopup />
      </body>
    </html>
  );
}
