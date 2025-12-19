import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/lib/builder';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Client 4 | Marketing Solutions',
  description: 'Professional marketing solutions for lead generation and brand presence. Transform your business with Test Client 4.',
  keywords: 'marketing, lead generation, brand presence, digital marketing, Test Client 4',
  authors: [{ name: 'Test Client 4' }],
  openGraph: {
    title: 'Test Client 4 | Marketing Solutions',
    description: 'Professional marketing solutions for lead generation and brand presence.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Client 4 | Marketing Solutions',
    description: 'Professional marketing solutions for lead generation and brand presence.',
  },
  robots: {
    index: true,
    follow: true,
  },
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