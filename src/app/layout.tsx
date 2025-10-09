// src/app/layout.tsx - COMPLETE VERSION
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shaun Chikerema - Software Engineer & Fullstack Developer',
  description: 'Professional portfolio of Shaun Chikerema - Expert Full-Stack Developer specializing in modern web technologies and scalable solutions.',
  keywords: 'Shaun Chikerema, Full-Stack Developer, Software Engineer, React, Next.js, TypeScript, Zimbabwe',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Shaun Chikerema - Full-Stack Developer',
    description: 'Professional portfolio showcasing expert software development skills and projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaun Chikerema - Full-Stack Developer',
    description: 'Professional portfolio of an expert software developer',
  },
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
      </body>
    </html>
  );
}