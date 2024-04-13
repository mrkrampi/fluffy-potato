import Link from 'next/link';

import { cn } from '@/lib/utils';
import { CourseInterface } from '@/interfaces/course.interface';

interface CourseCardProps {
  course: CourseInterface;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      href="/"
      className={cn(
        'flex flex-col justify-between md:p-12 bg-cover w-full h-[400px] rounded-md hover:shadow-lg relative group overflow-hidden',
        course.class,
      )}>
      <div
        style={{ backgroundImage: `url(${course.image})` }}
        className="absolute inset-0 bg-center bg-cover group-hover:scale-125 transition-transform duration-200"
      >
        <div className="absolute inset-0 bg-black/20"/>
      </div>
      <div className="z-10">
        <div>
          <h1 className="text-primary-white text-6xl max-w-md" dangerouslySetInnerHTML={{ __html: course.name }}/>
          <p className="text-primary-white text-lg">
            {course.level}
          </p>
        </div>
        <div className="text-primary-white text-lg flex items-center gap-x-4">
          {course.duration}
          <div className="w-12 h-1 bg-primary-white"/>
          {course.modules} модулів
        </div>
      </div>
    </Link>
  );
};
