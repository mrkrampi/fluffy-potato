import type { Metadata } from 'next';
import { Onest, Unbounded } from 'next/font/google';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { Toaster } from '@/components/ui/sonner';

import './globals.css';
import { EdgeStoreProvider } from '@/lib/edgestore';

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
    <EdgeStoreProvider>
      <html lang="uk" className="scroll-smooth">
      <body className={cn(
        'bg-primary-black h-full',
        onest.className,
        `${onest.variable} ${unbounded.variable}`,
      )}>
      {children}

      <Toaster/>
      </body>
      </html>
    </EdgeStoreProvider>
  );
}
