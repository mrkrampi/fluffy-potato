import type { Metadata } from 'next';
import { Onest, Unbounded } from 'next/font/google';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

import './globals.css';

const onest = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-onest', adjustFontFallback: false });
const unbounded = Unbounded({ subsets: ['latin', 'cyrillic'], variable: '--font-unbounded', adjustFontFallback: false });

export const metadata: Metadata = {
  title: siteConfig.mainTitle,
  description: siteConfig.mainDescription,
  verification: {
    google: 'google1a239d9ea71773e9'
  }
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
    {process.env.NODE_ENV === 'production' && (<GoogleTagManager gtmId="GTM-PQTVP6D4"/>)}
    {process.env.NODE_ENV === 'production' && (<GoogleAnalytics gaId="G-3BC6PKN4ZV" />)}
    </body>
    </html>
  );
}
