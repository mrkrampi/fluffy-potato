import type { Metadata } from 'next';
import { Onest, Inter, Unbounded } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const onest = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-onest', adjustFontFallback: false });
const unbounded = Unbounded({ subsets: ['latin', 'cyrillic'], variable: '--font-unbounded', adjustFontFallback: false });

export const metadata: Metadata = {
  title: siteConfig.mainTitle,
  description: siteConfig.mainDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
    <body className={cn(
      onest.className,
      'bg-primary-black',
      `${onest.variable} ${unbounded.variable}`,
    )}>{children}</body>
    </html>
  );
}
