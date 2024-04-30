import { cn } from '@/lib/utils';
import { GoalCard } from '@/components/cards/goals-card';
import { CarouselItem } from '@/components/ui/carousel';
import { CarouselWrapper } from '@/components/carousel-wrapper';

interface GoalsContainerProps {
  items: Array<string>;
  className?: string;
}

export const GoalsContainer = ({ items, className }: GoalsContainerProps) => {
  return (
    <>
      <div className={cn(
        "hidden w-full lg:grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-y-14 my-40 gap-x-9",
        className
      )}>
        {items.map((item: string, index: number) => (<GoalCard index={index} text={item} key={item}/>))}
      </div>
      <div className={cn(
        "lg:hidden md:w-2/3 mx-auto mt-16 md:mt-28",
        className
      )}>
        <CarouselWrapper>
          {items.map((item: string, index: number) =>
            (
              <CarouselItem key={item} className="justify-center px-2 md:p-0">
                <GoalCard index={index} text={item}/>
              </CarouselItem>
            ))}
        </CarouselWrapper>
      </div>
    </>
  );
};
