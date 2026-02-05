import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://umarnaqvi-portfolio.vercel.app'),
  title: 'Portfolio | Mohammed Umar Ben Naqvi | AI Product Manager',
  description: 'AI-Native Product Manager & Builder shipping products from 0-to-1 using AI-accelerated development. Architecting MVPs for SMBs, EdTech, and AI SaaS.',
  keywords: ['AI Product Manager', 'Product Builder', 'AI-Native Development', 'Mohammed Umar Ben Naqvi', 'BillFlow', 'Next.js', 'Firebase', 'Bangalore PM'],
  authors: [{ name: 'Mohammed Umar Ben Naqvi' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mohammed Umar Ben Naqvi | AI Product Manager',
    description: 'I ship products from 0→1 using AI-accelerated development.',
    url: 'https://umarnaqvi-portfolio.vercel.app/',
    siteName: 'Umar Naqvi Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Mohammed Umar Ben Naqvi Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed Umar Ben Naqvi | AI Product Manager',
    description: 'AI-Native Product Manager & Builder shipping products from 0-to-1.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammed Umar Ben Naqvi",
    "jobTitle": "AI-Native Product Manager",
    "url": "https://umarnaqvi-portfolio.vercel.app/",
    "image": "https://umarnaqvi-portfolio.vercel.app/logo.png",
    "sameAs": [
      "https://www.linkedin.com/in/mohammedumarnaqvi/",
      "https://github.com/mdumarnaqvi"
    ],
    "description": "AI-Native Product Manager & Builder shipping products from 0-to-1 using AI-accelerated development."
  };

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="f-2Q2fSTk4Xf_WVRYPupC3ieUnjNg9cANlFkX8XZbtk" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="hero-background" />
        <div className="hero-background-overlay" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
