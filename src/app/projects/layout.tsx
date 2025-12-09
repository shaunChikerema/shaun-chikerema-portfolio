import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Shaun Chikerema',
  description: 'Explore my portfolio of full-stack development projects',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}