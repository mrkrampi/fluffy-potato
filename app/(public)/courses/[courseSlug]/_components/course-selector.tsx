import { ALL_COURSES_LIST, COURSES_LIST, MINI_COURSE } from '@/consts/courses';
import { CourseInterface } from '@/interfaces/course.interface';
import { CourseTab } from '@/app/(public)/courses/[courseSlug]/_components/course-tab';
import { CourseOverview } from '@/app/(public)/courses/[courseSlug]/_components/course-overview';
import { CourseInformation } from '@/app/(public)/courses/[courseSlug]/_components/course-information';
import { Section } from '@/components/markup/section';

interface CourseSelectorProps {
  activeCourse: CourseInterface;
}

export const CourseSelector = ({ activeCourse }: CourseSelectorProps) => {
  return (
    <Section className="md:py-8 lg:py-[104px] lg:pb-0">
      <section className="flex gap-x-6 overflow-x-auto w-screen px-8">
        {ALL_COURSES_LIST.map((course) => (
          <CourseTab
            key={course.slug}
            slug={course.slug}
            title={course.name}
            selected={activeCourse.slug === course.slug}
          />
        ))}
      </section>
      <div className="lg:mb-6 lg:mx-5 md:mt-8 lg:mt-0 md:mb-12 flex flex-col gap-y-10">
        <CourseOverview course={activeCourse}/>
        <CourseInformation/>
      </div>
    </Section>
  );
};
