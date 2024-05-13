import type { Metadata } from 'next';
import { Onest, Unbounded } from 'next/font/google';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';

const onest = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-onest', adjustFontFallback: false });
const unbounded = Unbounded({ subsets: ['latin', 'cyrillic'], variable: '--font-unbounded', adjustFontFallback: false });

export const metadata: Metadata = {
  title: siteConfig.mainTitle,
  description: siteConfig.mainDescription,
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="uk" className="scroll-smooth">
    <body className={cn(
      'bg-primary-black h-full',
      onest.className,
      `${onest.variable} ${unbounded.variable}`,
    )}>
    {children}
    <Toaster />

    {process.env.NODE_ENV === 'production' && (<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!}/>)}
    {process.env.NODE_ENV === 'production' && (<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}/>)}
    </body>
    </html>
  );
}
