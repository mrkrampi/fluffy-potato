import { WHY_US_LIST } from '@/app/(public)/about-us/_consts';
import { WhyUsCard } from '@/app/(public)/about-us/_component/why-us-card';

export const WhyUsSection = () => {
  return (
    <section className="flex lg:gap-12 md:mx-4 lg:mx-24 md:py-14 lg:py-[200px] relative z-10">
      <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-6 z-10 items-center">
        <WhyUsCard item={WHY_US_LIST[0]}/>
        <h3 className="lg:hidden md:text-4xl lg:text-5xl font-unbounded z-10 col-span-2">
          Чому обирають саме Niko Academy?
        </h3>
        <WhyUsCard item={WHY_US_LIST[1]}/>
        <WhyUsCard item={WHY_US_LIST[2]}/>
        <WhyUsCard item={WHY_US_LIST[3]}/>
      </div>
      <h3 className="hidden lg:block md:text-4xl lg:text-5xl font-unbounded z-10">
        Чому обирають саме Niko Academy?
      </h3>
    </section>
  )
}
