import { Heading } from '@/components/heading';

import nataliaImage from '@/public/natalia.webp';
import Image from 'next/image';
import { TEACHER_ACHIEVEMENTS, TEACHER_ACHIEVEMENTS_IMAGES } from '@/app/(public)/courses/[courseSlug]/_consts';

export const AboutTeacherSection = () => {
  return (
    <section className="lg:mx-5 md:mx-8 mx-2">
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
          <h1 className="text-primary-black lg:text-6xl md:text-5xl text-3xl text-center lg:text-left">
            Наталія Яцишинець
          </h1>
          <ul className="list-disc marker:text-primary-accent my-6">
            {TEACHER_ACHIEVEMENTS.map((item: string) => {
              return (
                <li key={item} className="text-primary-black font-medium md:text-xl lg:text-2xl md:py-10 lg:py-3">
                  {item}
                </li>
              );
            })}
          </ul>

          <div className="lg:mt-12 flex justify-between items-center lg:mx-0 -mx-6 md:-mx-20">
            {TEACHER_ACHIEVEMENTS_IMAGES.map((item: string) => {
              return (
                <div key={item}>
                  <Image
                    src={item}
                    alt={item}
                    width={104}
                    height={104}
                    className="object-cover w-3/4 md:w-full"
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
