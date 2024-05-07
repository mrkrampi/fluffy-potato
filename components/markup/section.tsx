import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface SectionProps {
  className?: string;
}

export const Section = ({ children, className }: PropsWithChildren<SectionProps>) => {
  return (
    <section className={cn(
      "py-20 md:py-[100px] lg:py-[200px] lg:px-24 mx-auto relative z-10 max-w-[calc(100vw-16px)] md:max-w-[calc(100vw-64px)]",
      className,
    )}>
      {children}
    </section>
  )
};
