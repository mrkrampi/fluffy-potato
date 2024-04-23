import { ALL_COURSES_LIST, COURSES_LIST, MINI_COURSE } from '@/consts/courses';
import { CourseInterface } from '@/interfaces/course.interface';
import { CourseTab } from '@/app/(public)/courses/[courseSlug]/_components/course-tab';
import { CourseOverview } from '@/app/(public)/courses/[courseSlug]/_components/course-overview';
import { CourseInformation } from '@/app/(public)/courses/[courseSlug]/_components/course-information';

interface CourseSelectorProps {
  activeCourse: CourseInterface;
}

export const CourseSelector = ({ activeCourse }: CourseSelectorProps) => {
  return (
    <>
      <section className="flex gap-x-6 overflow-x-auto w-screen px-8 xl:justify-center">
        {ALL_COURSES_LIST.map((course) => (
          <CourseTab
            key={course.slug}
            slug={course.slug}
            title={course.name}
            selected={activeCourse.slug === course.slug}
          />
        ))}
      </section>
      <div className="lg:my-6 lg:mx-5 md:my-12 md:mx-8 flex flex-col gap-y-6">
        <CourseOverview course={activeCourse}/>
        <CourseInformation/>
      </div>
    </>
  );
};
