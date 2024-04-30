import type { Metadata } from 'next';
import { Onest, Unbounded } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';

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
    <html lang="uk" className="scroll-smooth">
    <body className={cn(
      onest.className,
      'bg-primary-black',
      `${onest.variable} ${unbounded.variable}`,
    )}>
    {children}
    <GoogleTagManager gtmId="GTM-PQTVP6D4"/>
    </body>
    </html>
  );
}
