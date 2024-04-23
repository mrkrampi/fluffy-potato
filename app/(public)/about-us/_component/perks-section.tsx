import { Heading } from '@/components/heading';
import { GoalsContainer } from '@/components/goals-container';
import { PERKS, RESULT_PROGRESS } from '@/app/(public)/about-us/_consts';
import { ProgressbarItem } from '@/app/(public)/about-us/_component/progressbar-item';

export const PerksSection = () => {
  return (
    <section className="md:mx-4 lg:mx-24 md:my-14 lg:py-[200px] relative z-10">
      <Heading className="uppercase">Щo отримають Випускники?</Heading>

      <GoalsContainer items={PERKS}/>

      <div className="pt-24 gap-12 flex flex-wrap justify-between">
        {RESULT_PROGRESS.map(({ progress, text }) =>
          (
            <div key={text} className="lg:w-60 flex flex-col lg:gap-10 items-center">
              <ProgressbarItem progress={progress}/>
              <div className="font-unbounded text-4xl">
                {text}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
