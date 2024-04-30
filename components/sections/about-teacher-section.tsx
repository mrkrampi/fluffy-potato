import Image from 'next/image';

import { Heading } from '@/components/markup/heading';
import { TEACHER_ACHIEVEMENTS, TEACHER_ACHIEVEMENTS_IMAGES } from '@/app/(public)/courses/[courseSlug]/_consts';

import nataliaImage from '@/public/natalia.webp';

export const AboutTeacherSection = () => {
  return (
    <section className="md:px-8 px-2 lg:px-24 mx-auto md:py-14 lg:py-24">
      <Heading className="lg:text-6xl">
        <span className="text-primary-accent">Вас навчатиме експерт</span> <br className="hidden lg:block"/> із 6 - річним досвідом у галузі
      </Heading>
      <div
        style={{ backgroundImage: 'url(\'/backgrounds/about-teacher-background.png\')' }}
        className="lg:mt-40 mt-12 md:mt-20 bg-cover bg-center grid lg:grid-cols-2 gap-y-6 gap-x-12 md:py-20 p-6 md:px-24 lg:px-16 rounded-3xl"
      >
        <Image
          src={nataliaImage}
          alt="Natalia"
        />

        <div>
          <h3 className="text-primary-black lg:text-6xl md:text-5xl text-3xl text-center lg:text-left">
            Наталія Яцишинець
          </h3>
          <ul className="list-disc marker:text-primary-accent my-6">
            {TEACHER_ACHIEVEMENTS.map((item: string) => {
              return (
                <li key={item} className="text-primary-black font-medium md:text-xl lg:text-2xl py-3 md:py-10 lg:py-3">
                  {item}
                </li>
              );
            })}
          </ul>

          <div className="lg:mt-12 flex justify-between items-center lg:mx-0 -mx-6 md:-mx-20">
            {TEACHER_ACHIEVEMENTS_IMAGES.map((item: string) => {
              return (
                <div key={item} className="relative md:w-[104px] md:h-[104px] w-12 h-12">
                  <Image
                    src={item}
                    alt={item}
                    fill
                    className="object-cover md:w-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
