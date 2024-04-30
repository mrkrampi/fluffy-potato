import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface SectionProps {
  className?: string;
}

export const Section = ({ children, className }: PropsWithChildren<SectionProps>) => {
  return (
    <section className={cn(
      "py-20 md:py-24 lg:py-48 px-2 md:px-8 lg:px-24 mx-auto relative z-10",
      className,
    )}>
      {children}
    </section>
  )
};
