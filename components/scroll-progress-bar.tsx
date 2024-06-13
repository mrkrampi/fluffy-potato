'use client';

import { useState } from 'react';
import { useEvent } from 'react-use';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

export const ScrollProgressBar = ({ className }: Readonly<Props>) => {
  const [width, setWidth] = useState<string | null>(null);


  const scrolling = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    if (height > 0) {
      setWidth(`${scrolled}%`);
    } else {
      setWidth(null);
    }
  };

  useEvent('scroll', scrolling);

  return (
    <div
      className={cn(
        'm-0 p-0 fixed z-[9999] bg-primary-blue h-0.5 transition-all duration-100 ease-out',
        className,
      )}
      style={{ width: `${width}` }}
    />
  );
};
