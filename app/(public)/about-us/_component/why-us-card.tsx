import { WhyUsInterface } from '@/interfaces/why-us.interface';

interface WhyUsCardProps {
  item: WhyUsInterface;
}

export const WhyUsCard = ({ item: { count, title, description } }: WhyUsCardProps) => {
  return (
    <div className="md:py-4 lg:py-6 md:px-6 lg:px-8 rounded-2xl bg-primary-white flex flex-col items-center justify-center h-full">
      <div className="text-primary-accent md:mb-4 font-unbounded md:text-3xl lg:text-4xl">{count}</div>
      <div className="text-primary-black md:mb-6 font-unbounded lg:text-2xl uppercase">{title}</div>
      <div className="text-primary-black font-unbounded lg:text-xl text-center">{description}</div>
    </div>
  );
};
