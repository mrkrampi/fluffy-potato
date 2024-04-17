import { PropsWithChildren } from 'react';

import { Carousel, CarouselContent, CarouselNext, CarouselOptions, CarouselPrevious } from '@/components/ui/carousel';

interface CarouselWrapperProps {
  opts?: CarouselOptions;
}

export const CarouselWrapper = ({ children, opts }: PropsWithChildren<CarouselWrapperProps>) => {
  return (
    <Carousel
      opts={{
        loop: true,
        ...opts
      }}
    >
      <CarouselContent className="ml-0">
        {children}
      </CarouselContent>
      <CarouselPrevious
        size="xlg"
        variant="link"
        className="left-0 md:-left-32 -bottom-16 hover:bg-none active:bg-none"
        arrow={<div
          className="h-1 min-w-16 bg-primary-white relative before:absolute before:w-4 before:h-4 before:left-0 md:before:left-1 before:border-b-4 before:border-l-4 before:border-primary-white before:rotate-45 before:top-0.5 before:-translate-y-1/2"></div>}
      />
      <CarouselNext
        size="xlg"
        variant="link"
        className="right-0 md:-right-32 md:top-1/2 -bottom-16 hover:bg-none active:bg-none"
        arrow={<div
          className="h-1 min-w-16 bg-primary-white relative before:absolute before:w-4 before:h-4 before:right-0 md:before:right-1 before:border-t-4 before:border-r-4 before:border-primary-white before:rotate-45 before:top-0.5 before:-translate-y-1/2"></div>}
      />
    </Carousel>
  );
};
