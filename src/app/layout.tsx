import './globals.css'; // Add this import
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shaun Chikerema - Full-Stack Developer & Software Engineer',
  description: 'Professional portfolio of Shaun Chikerema - Expert Full-Stack Developer specializing in modern web technologies and scalable solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}