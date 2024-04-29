import { MENTORING_DIRECTION_BG_TEXT, MENTORING_DIRECTION_SUBTITLE, MENTORING_DIRECTIONS_LIST } from '@/app/(public)/mentoring/_consts';

export const MentoringDirectionsSection = () => {
  return (
    <section className="md:px-8 px-2 lg:px-24 mx-auto md:py-14 lg:py-24">
      <h2
        className="uppercase text-5xl md:text-[104px] lg:text-[160px] xl:text-[200px] text-center text-text-bg -tracking-widest font-bold leading-[1.1] font-unbounded">
        {MENTORING_DIRECTION_BG_TEXT}
      </h2>

      <div
        className="font-medium text-5xl md:text-[128px] lg:text-[220px] -mt-6 md:-mt-12 lg:-mt-24 text-primary-accent font-unbounded text-center">
        {MENTORING_DIRECTIONS_LIST.length}
      </div>

      <div className="text-primary-white text-center md:text-2xl lg:text-4xl md:max-w-xl lg:max-w-3xl mx-auto mt-8 md:mt-10 lg:mt-14">
        {MENTORING_DIRECTION_SUBTITLE}
      </div>

      <div className="mt-12 md:mt-14 lg:mt-24 items-center flex-wrap gap-4 lg:gap-12 grid md:grid-cols-6 grid-cols-4">
        {MENTORING_DIRECTIONS_LIST.map((item: string) => (
          <div
            key={item}
            className="uppercase text-primary-accent rounded-2xl font-unbounded md:text-2xl lg:text-4xl bg-primary-white p-4 md:py-7 lg:px-6 lg:py-12 w-full h-full flex items-center justify-center text-center col-span-2 last:col-start-2 md:last:col-start-auto"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};
