import type { Metadata } from 'next';
import { Rajdhani } from 'next/font/google';
import './globals.css';

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gaming Portal - Welcome Home',
  description: 'Professional gaming portal with modern design and latest games',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${rajdhani.className} antialiased bg-[#0a1628] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
