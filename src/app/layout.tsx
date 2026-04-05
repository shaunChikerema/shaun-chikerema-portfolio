import './globals.css';
import type { Metadata, Viewport } from 'next';
import WhatsAppFloat from '@/components/sections/WhatsAppFloat';

export const metadata: Metadata = {
  title: 'Shaun Chikerema – Software Engineer · Botswana',
  description:
    'Portfolio of Shaun Chikerema — full-stack web and native mobile engineer based in Gaborone, Botswana. Specialising in Next.js, TypeScript, PostgreSQL, React Native, and Supabase.',
  keywords:
    'Shaun Chikerema, Full-Stack Developer, Software Engineer, React, Next.js, TypeScript, React Native, Supabase, Botswana, Gaborone',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Shaun Chikerema – Full-Stack & Mobile Engineer',
    description:
      'Full-stack web and native mobile — from database schema to deployed app, on any platform.',
    type: 'website',
    url: 'https://shaun-chikerema.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaun Chikerema – Full-Stack & Mobile Engineer',
    description:
      'Full-stack web and native mobile — from database schema to deployed app, on any platform.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}