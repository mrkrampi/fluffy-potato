import { WHY_US_LIST } from '@/app/(public)/about-us/_consts';
import { WhyUsCard } from '@/app/(public)/about-us/_component/why-us-card';
import { Section } from '@/components/markup/section';

export const WhyUsSection = () => {
  return (
    <Section className="grid grid-cols-5 gap-6">
      <div className="grid grid-cols-2 gap-6 col-span-3">
        <WhyUsCard item={WHY_US_LIST[0]}/>
        <WhyUsCard item={WHY_US_LIST[1]}/>
        <WhyUsCard item={WHY_US_LIST[2]}/>
        <WhyUsCard item={WHY_US_LIST[3]}/>
      </div>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-unbounded z-10 col-span-2">
        Чому обирають саме Niko Academy?
      </h3>
    </Section>
  );
};
