import { CourseInterface } from '@/interfaces/course.interface';
import Image from 'next/image';

interface CourseOverviewProps {
  course?: CourseInterface;
}

export const CourseOverview = ({ course }: CourseOverviewProps) => {
  if (!course) {
    return null;
  }

  return (
    <div className="mt-12 md:mt-24 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2 md:mx-0 px-8 md:px-24 relative rounded-3xl overflow-hidden">
      <Image
        src="/backgrounds/course-overview-bg.png"
        alt="Overview bg"
        fill
        className="object-cover object-center"
      />
      <div className="z-10">
        <h1
          className="text-primary-white lg:text-6xl md:text-5xl text-3xl"
        >
          {course.name}
        </h1>
        <ul className="list-disc marker:text-primary-accent my-6">
          {course.overview.map((item: string) => {
            return (
              <li key={item} className="text-primary-white font-medium md:text-xl lg:text-2xl my-3">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-full min-h-[478px] w-full rounded-2xl relative overflow-hidden">
        <Image
          src={course.overviewImage}
          alt={course.name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
