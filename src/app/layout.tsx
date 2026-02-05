
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Portfolio | Mohammed Umar Ben Naqvi | AI Product Manager',
  description: 'AI-Native Product Manager & Builder shipping products from 0-to-1 using AI-accelerated development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="f-2Q2fSTk4Xf_WVRYPupC3ieUnjNg9cANlFkX8XZbtk" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap" rel="stylesheet" />
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
