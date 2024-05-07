import { WhyUsInterface } from '@/interfaces/why-us.interface';

interface WhyUsCardProps {
  item: WhyUsInterface;
}

export const WhyUsCard = ({ item: { count, title, description } }: WhyUsCardProps) => {
  return (
    <div className="px-2 py-6 md:px-6 md:py-4 lg:px-8 lg:py-6 rounded-2xl bg-primary-white flex flex-col items-center justify-center h-full w-full lg:w-sm text-center">
      <div className="text-primary-accent mb-2 md:mb-4 font-unbounded text-2xl md:text-3xl lg:text-4xl">{count}</div>
      <div className="text-primary-black mb-4 md:mb-6 font-unbounded lg:text-2xl uppercase font-medium">{title}</div>
      <div className="text-primary-black text-sm md:text-base lg:text-xl">{description}</div>
    </div>
  );
};
