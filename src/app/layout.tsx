import './globals.css';

export const metadata = {
  title: 'Shaun Chikerema - Full-Stack & Mobile Developer',
  description: 'Professional portfolio of Shaun Chikerema - Full-Stack & Mobile Developer specializing in React, React Native, Next.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}