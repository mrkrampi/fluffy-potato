import { WHY_US_LIST } from '@/app/(public)/about-us/_consts';
import { WhyUsCard } from '@/app/(public)/about-us/_component/why-us-card';
import { Section } from '@/components/markup/section';

export const WhyUsSection = () => {
  return (
    <Section className="flex flex-col-reverse lg:grid lg:grid-cols-8 gap-6 gap-y-16 md:gap-y-14">
      <div className="grid grid-cols-2 md:grid-cols-[repeat(2,280px)] lg:grid-cols-[repeat(2,360px)] gap-4 col-span-5 justify-center">
        <WhyUsCard item={WHY_US_LIST[0]}/>
        <WhyUsCard item={WHY_US_LIST[1]}/>
        <WhyUsCard item={WHY_US_LIST[2]}/>
        <WhyUsCard item={WHY_US_LIST[3]}/>
      </div>
      <h3 className="text-[32px] md:text-[40px] lg:text-5xl font-unbounded z-10 col-span-3 uppercase">
        Чому обирають саме Niko Academy?
      </h3>
    </Section>
  );
};
