import Image from 'next/image';

import { GoalCard } from '@/components/cards/goals-card';
import { MENTORING_PROCESS_LIST, MENTORING_PROCESS_TITLE } from '@/app/(public)/mentoring/_consts';

import arrowWhite from '@/public/arrows/white.svg';
import { Section } from '@/components/markup/section';
import { Heading } from '@/components/markup/heading';

export const MentoringProcessSection = () => {
  return (
    <Section>
      <div
        className="w-full max-w-[80vw] lg:max-w-xl py-12 md:py-10 lg:py-20 px-6 md:px-4 lg:px-6 bg-[#181920] rounded-tl-3xl rounded-tr-3xl flex items-center">
        <Heading className="text-2xl lg:text-[40px]">{MENTORING_PROCESS_TITLE}</Heading>
        <Image src={arrowWhite} alt="White arrow"/>
      </div>

      <div
        className="w-full md:grid md:grid-cols-2 xl:grid-cols-3 md:justify-center md:gap-y-10 lg:gap-y-20 py-14 lg:py-24 gap-x-6 md:gap-x-20 lg:gap-x-9 bg-[#181920] rounded-3xl rounded-tl-none px-2 md:px-24 lg:px-6 flex overflow-x-auto justify-start">
        {MENTORING_PROCESS_LIST.map((item: string, index: number) =>
          (
            <GoalCard
              key={item}
              index={index}
              text={item}
              containerClassName="min-w-[70vw] md:min-w-0"
            />
          ))}
      </div>
    </Section>
  );
};
