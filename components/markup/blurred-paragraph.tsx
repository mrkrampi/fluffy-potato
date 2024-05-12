import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
}

export const BlurredParagraph = ({ className, children }: Readonly<PropsWithChildren<Props>>) => {
  return (
    <div className={cn(
      "px-6 lg:px-4 py-4 md:py-8 overflow-hidden rounded-[26px] relative",
      className,
    )}>
      <p className="z-10 relative">
        {children}
      </p>

      <div className="blur-[10px] bg-[rgba(27,27,27,0.25)]  absolute inset-0"/>
    </div>
  );
};
