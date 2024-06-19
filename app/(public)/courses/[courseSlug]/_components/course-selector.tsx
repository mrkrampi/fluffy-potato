import { courses } from '@/db/schema';
import { getAllCourses } from '@/db/course-queries';
import { Section } from '@/components/markup/section';
import { CourseTab } from '@/app/(public)/courses/[courseSlug]/_components/course-tab';
import { CourseOverview } from '@/app/(public)/courses/[courseSlug]/_components/course-overview';
import { CourseInformation } from '@/app/(public)/courses/[courseSlug]/_components/course-information';

interface CourseSelectorProps {
  activeCourse: typeof courses.$inferSelect;
}

export const CourseSelector = async ({ activeCourse }: CourseSelectorProps) => {
  const coursesList = await getAllCourses();

  return (
    <Section className="md:py-8 lg:py-[104px] lg:pb-0">
      <section className="flex gap-x-6 overflow-x-auto px-8 w-full">
        {coursesList.map((course) => (
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
        <CourseInformation course={activeCourse}/>
      </div>
    </Section>
  );
};
