import { WHY_US_LIST } from '@/app/(public)/about-us/_consts';
import { WhyUsCard } from '@/app/(public)/about-us/_component/why-us-card';

export const WhyUsSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-12 mx-3 md:mx-4 lg:mx-24 py-8 md:py-14 lg:py-[200px] relative z-10">
      <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-6 z-10 items-center">
        <div className="block md:hidden lg:block">
          <WhyUsCard item={WHY_US_LIST[0]}/>
        </div>
        <WhyUsCard item={WHY_US_LIST[1]}/>
        <WhyUsCard item={WHY_US_LIST[2]}/>
        <WhyUsCard item={WHY_US_LIST[3]}/>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-1 gap-6 items-center lg:items-start">
        <div className="hidden md:block lg:hidden">
          <WhyUsCard item={WHY_US_LIST[0]}/>
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-unbounded z-10 text-center md:text-left col-span-2">
          Чому обирають саме Niko Academy?
        </h3>
      </div>
    </section>
  )
}
