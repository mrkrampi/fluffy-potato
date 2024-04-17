import type { Metadata } from 'next';
import { Onest, Inter, Unbounded } from 'next/font/google';

import './globals.css';
import { cn } from '@/lib/utils';

const onest = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-onest' });
const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' });
const unbounded = Unbounded({ subsets: ['latin', 'cyrillic'], variable: '--font-unbounded' });

export const metadata: Metadata = {
  title: 'Niko IT Academy',
  description: 'Онлайн курси для розвитку твоєї кар’єри в IT',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cn(
      onest.className,
      'bg-primary-black',
      `${onest.variable} ${inter.variable} ${unbounded.variable}`,
    )}>{children}</body>
    </html>
  );
}
