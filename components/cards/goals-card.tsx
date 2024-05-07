import { cn } from '@/lib/utils';

interface GoalCardProps {
  index: number;
  text: string;
  containerClassName?: string;
  indexClassName?: string;
  textClassName?: string;
}

export const GoalCard = ({ text, index, indexClassName, textClassName, containerClassName }: GoalCardProps) => {
  return (
    <div className={cn("w-full flex flex-col gap-y-4 lg:gap-y-8 max-w-md mx-auto", containerClassName)}>
      <p className="text-xl font-medium text-primary-gray">[ {index + 1} ]</p>
      <p className={cn(
        "text-primary-white font-medium text-2xl md:text-base lg:text-2xl tracking-tight",
        textClassName,
      )}>{text}</p>
    </div>
  );
};
