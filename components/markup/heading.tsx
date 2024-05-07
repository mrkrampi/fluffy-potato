import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

const DEFAULT_CLASS_NAME = 'font-unbounded text-primary-white tracking-tighter text-5xl md:text-[64px] lg:text-[6.5rem] uppercase';

interface HeadingProps {
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Heading = ({ level, className, children }: PropsWithChildren<HeadingProps>) => {
  switch (level) {
    case 1:
      return <h1 className={cn(DEFAULT_CLASS_NAME, className)}>{children}</h1>;
    case 2:
      return <h2 className={cn(DEFAULT_CLASS_NAME, className)}>{children}</h2>;
    case 3:
      return <h3 className={cn(DEFAULT_CLASS_NAME, className)}>{children}</h3>;
    case 4:
      return <h4 className={cn(DEFAULT_CLASS_NAME, className)}>{children}</h4>;
    case 5:
      return <h5 className={cn(DEFAULT_CLASS_NAME, className)}>{children}</h5>;
    case 6:
      return <h6 className={cn(DEFAULT_CLASS_NAME, className)}>{children}</h6>;
    default:
      return <h2 className={cn(DEFAULT_CLASS_NAME, className)}>{children}</h2>;
  }
};
