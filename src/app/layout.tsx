import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { site } from '@/data/site';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: 'Lumora Studio — Freelance Web Developer & AI/Data Solutions',
    template: '%s | Lumora Studio',
  },
  description:
    'Lumora Studio helps startups, creators, and growing businesses launch fast, modern, and professional digital experiences. Freelance web development, AI prototypes, and data projects by Sharmila Balasubramaniam.',
  keywords: [
    'freelance web developer',
    'AI prototypes',
    'data science',
    'Python development',
    'Next.js developer',
    'Chennai',
    'Lumora Studio',
    'Sharmila Balasubramaniam',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.domain,
    siteName: site.brand,
    title: 'Lumora Studio — Freelance Web Developer & AI/Data Solutions',
    description: site.subheadline,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: site.brand }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumora Studio — Freelance Web Developer & AI/Data Solutions',
    description: site.subheadline,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.domain,
  jobTitle: site.role,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'India',
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.brand,
  description: 'Premium freelance web development and AI/data solutions',
  areaServed: 'Worldwide',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} dark`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, serviceJsonLd]) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
