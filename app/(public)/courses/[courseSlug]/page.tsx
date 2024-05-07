import Image from 'next/image';
import type { Metadata } from 'next';

import { ALL_COURSES_LIST } from '@/consts/courses';
import { StudyFormatsSection } from '@/components/sections/study-formats-section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';
import { GoalsSection } from '@/app/(public)/courses/[courseSlug]/_components/goals-section';
import { CourseSelector } from '@/app/(public)/courses/[courseSlug]/_components/course-selector';
import { StudyGuideSection } from '@/app/(public)/courses/[courseSlug]/_components/study-guide-section';
import { CourseProgramSection } from '@/app/(public)/courses/[courseSlug]/_components/course-program-section';

import courseProgram from '@/public/courses/course-program.webp';
import { AboutTeacherSection } from '@/components/sections/about-teacher-section';

interface CourseSlugPageProps {
  params: {
    courseSlug: string;
  };
}

export function generateMetadata({ params: { courseSlug } }: CourseSlugPageProps): Metadata {
  const activeCourse = ALL_COURSES_LIST.find((course) => course.slug === courseSlug);
  return {
    title: activeCourse?.courseTitle,
    description: activeCourse?.courseDescription,
  };
}

const CourseSlugPage = ({ params: { courseSlug } }: CourseSlugPageProps) => {
  const activeCourse = ALL_COURSES_LIST.find((course) => course.slug === courseSlug);

  if (!activeCourse) {
    return null;
  }

  return (
    <div className="md:mt-[104px]">
      <CourseSelector activeCourse={activeCourse}/>
      <GoalsSection goals={activeCourse?.goals}/>

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
      <StudyFormatsSection registerButton/>
      <StudentsStoriesSection withoutBackground/>
    </div>
  );
};

export default CourseSlugPage;
