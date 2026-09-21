import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import WhatsAppFloat from '@/components/sections/WhatsAppFloat';
import { ThemeProvider } from '@/context/ThemeContext';

// Self-hosted at build time and preloaded, so there's no render-blocking
// request to Google and no late font swap after the hero entrance.
// Each font exposes a CSS variable that globals.css and tailwind.config.js use.
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  axes: ['opsz'],
  display: 'swap',
  variable: '--font-dm',
});

// No longer used in the hero. preload: false keeps it off the critical path;
// it still loads on demand for any component that uses .font-mono.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Shaun Chikerema – Software Engineer · Botswana',
  description:
    'Portfolio of Shaun Chikerema — full-stack web and native mobile engineer based in Gaborone, Botswana. Specialising in Next.js, TypeScript, PostgreSQL, React Native, and Supabase.',
  keywords:
    'Shaun Chikerema, Full-Stack Developer, Software Engineer, React, Next.js, TypeScript, React Native, Supabase, Botswana, Gaborone',
  manifest: '/manifest.json',
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
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} overflow-x-hidden`}
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider>
          {children}
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}