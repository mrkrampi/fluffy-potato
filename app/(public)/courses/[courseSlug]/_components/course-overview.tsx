import Image from 'next/image';

import { courses } from '@/db/schema';

interface CourseOverviewProps {
  course?: typeof courses.$inferSelect;
}

export const CourseOverview = ({ course }: CourseOverviewProps) => {
  if (!course) {
    return null;
  }

  return (
    <div className="mt-20 md:mt-24 py-10 md:pt-8 md:pb-20 lg:py-[104px] grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2 md:mx-0 px-8 md:px-16 lg:px-24 relative rounded-3xl overflow-hidden">
      <Image
        src="/backgrounds/course-overview-bg.png"
        alt="Overview bg"
        fill
        className="object-cover object-center"
      />
      <div className="z-10">
        <h1 className="text-primary-white lg:text-[3vw] md:text-[54px] text-[32px] text-center uppercase">
          {course.name}
        </h1>

        <ul className="list-disc marker:text-primary-accent my-6">
          {(course.overview ?? []).map((item: string) => {
            return (
              <li key={item} className="text-primary-white font-medium md:text-xl lg:text-2xl my-6"
                  dangerouslySetInnerHTML={{ __html: item }}/>
            );
          })}
        </ul>
      </div>

      <div className="h-full min-h-[478px] w-full rounded-2xl relative overflow-hidden">
        <Image
          src={course.overviewImageUrl}
          alt={course.name}
          fill
          className={course.overviewImageCover ? 'object-cover' : 'object-contain'}
        />
      </div>
    </div>
  );
};
