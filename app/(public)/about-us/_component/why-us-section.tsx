import { WHY_US_LIST } from '@/app/(public)/about-us/_consts';
import { WhyUsCard } from '@/app/(public)/about-us/_component/why-us-card';

export const WhyUsSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-x-6 gap-y-16 md:gap-y-14 lg:gap-12 relative py-20 md:py-24 lg:py-48 px-2 md:px-8 lg:px-24 mx-auto">
      <div className="grid grid-cols-2 gap-4 lg:gap-6 w-fit mx-auto lg:w-1/2">
        <WhyUsCard item={WHY_US_LIST[0]}/>
        <WhyUsCard item={WHY_US_LIST[1]}/>
        <WhyUsCard item={WHY_US_LIST[2]}/>
        <WhyUsCard item={WHY_US_LIST[3]}/>
      </div>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-unbounded z-10 col-span-2 lg:w-1/2">
        Чому обирають саме Niko Academy?
      </h3>
    </section>
  );
};
