import Image from 'next/image';
import type { Metadata } from 'next';

import { JsonLd } from '@/components/json-ld';
import { StudyFormatsSection } from '@/components/sections/study-formats-section';
import { AboutTeacherSection } from '@/components/sections/about-teacher-section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';
import { GoalsSection } from '@/app/(public)/courses/[courseSlug]/_components/goals-section';
import { CourseSelector } from '@/app/(public)/courses/[courseSlug]/_components/course-selector';
import { StudyGuideSection } from '@/app/(public)/courses/[courseSlug]/_components/study-guide-section';
import { CourseProgramSection } from '@/app/(public)/courses/[courseSlug]/_components/course-program-section';

export const fetchCache = 'force-no-store';

import courseProgram from '@/public/courses/course-program.webp';
import { getAllCourses, getCourseBySlug } from '@/db/course-queries';

interface CourseSlugPageProps {
  params: {
    courseSlug: string;
  };
}

export async function generateStaticParams() {
  const coursesList = await getAllCourses();
  return coursesList.map(({ slug }) => ({ courseSlug: slug }));
}

export async function generateMetadata({ params: { courseSlug } }: CourseSlugPageProps): Promise<Metadata> {
  const activeCourse = await getCourseBySlug(courseSlug);
  return {
    title: activeCourse?.courseTitle,
    description: activeCourse?.courseDescription,
  };
}

const CourseSlugPage = async ({ params: { courseSlug } }: CourseSlugPageProps) => {
  const activeCourse = await getCourseBySlug(courseSlug);

  if (!activeCourse) {
    return null;
  }

  return (
    <>
      <div className="md:mt-[104px] overflow-x-hidden">
        <CourseSelector activeCourse={activeCourse}/>
        <GoalsSection goals={activeCourse?.goals ?? []}/>

        <div className="relative overflow-hidden">
          <StudyGuideSection/>

          <Image
            src={courseProgram}
            alt="Course Program"
            className="object-cover -rotate-90 opacity-50 md:w-3/4 absolute md:top-[1100px] md:-right-24 lg:-right-28 lg:top-[700px]"
          />

          <CourseProgramSection course={activeCourse}/>
        </div>

        <AboutTeacherSection/>
        <StudyFormatsSection registerButton course={activeCourse}/>
        <StudentsStoriesSection/>
      </div>

      {activeCourse.microdata ? <JsonLd data={JSON.parse(activeCourse.microdata)}/> : null}
    </>
  );
};

export default CourseSlugPage;
