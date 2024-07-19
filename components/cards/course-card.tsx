import Link from 'next/link';

import { courses } from '@/db/schema';

interface CourseCardProps {
  course: typeof courses.$inferSelect;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="flex flex-col justify-between px-4 py-12 md:p-12 bg-cover w-full h-[480px] md:h-[400px] rounded-md hover:shadow-lg relative group overflow-hidden">
      <div
        style={{ backgroundImage: `url(${course.previewImageUrl})` }}
        className="absolute inset-0 bg-center bg-cover md:group-hover:scale-125 transition-transform duration-200"
      >
        <div className="absolute inset-0 bg-black/20"/>
      </div>

      <div className="z-10 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-primary-white text-2xl md:text-[64px] leading-none max-w-md mb-4 md:mb-2" dangerouslySetInnerHTML={{ __html: course.name }}/>

          <p className="text-primary-white mt-auto md:text-xl">
            {course.level}
          </p>
        </div>

        <div className="text-primary-white text-xl flex items-center gap-x-4 mt-auto">
          {course.duration}
          <div className="w-12 h-1 bg-primary-white"/>
          {course.countOfModules} модулів
        </div>
      </div>
    </Link>
  );
};
