import { Heading } from '@/components/markup/heading';
import { GoalCard } from '@/components/cards/goals-card';
import { PERKS, RESULT_PROGRESS } from '@/app/(public)/about-us/_consts';
import { ProgressbarItem } from '@/app/(public)/about-us/_component/progressbar-item';
import { Section } from '@/components/markup/section';

export const PerksSection = () => {
  return (
    <Section className="relative z-10">
      <Heading className="uppercase md:text-[64px] text-[32px] leading-none">Щo отримають Випускники?</Heading>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-between lg:mt-40 md:mt-20 mt-16 gap-6 md:gap-2 lg:gap-16 max-w-xs md:max-w-fit mx-auto">
        {PERKS.map((item: string, index: number) => (
          <GoalCard
            index={index}
            text={item}
            key={item}
            textClassName="text-base font-normal"
          />))}
      </div>

      <div className="pt-16 lg:pt-24 gap-10 grid grid-cols-2 md:grid-cols-4">
        {RESULT_PROGRESS.map(({ progress, text }) =>
          (
            <div key={text} className="w-32 lg:w-60 flex flex-col lg:gap-10 items-center mx-auto md:w-full">
              <ProgressbarItem progress={progress}/>
              <div className="font-unbounded text-2xl lg:text-[32px] mt-6 lg:mt-10 uppercase">
                {text}
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
};
