import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { ALL_COURSES_LIST } from '@/consts/courses';
import { CourseSelector } from '@/app/(public)/courses/[courseSlug]/_components/course-selector';
import { GoalsSection } from '@/app/(public)/courses/[courseSlug]/_components/goals-section';
import { StudyGuideSection } from '@/app/(public)/courses/[courseSlug]/_components/study-guide-section';
import { CourseProgramSection } from '@/app/(public)/courses/[courseSlug]/_components/course-program-section';

import courseProgram from '@/public/courses/course-program.webp';
import Image from 'next/image';
import { AboutTeacherSection } from '@/app/(public)/courses/[courseSlug]/_components/about-teacher-section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';
import { StudyFormatsSection } from '@/components/sections/study-formats-section';

export const metadata: Metadata = {
  title: siteConfig.coursesTitle,
  description: siteConfig.coursesDescription,
};

interface CourseSlugPageProps {
  params: {
    courseSlug: string;
  };
}

const CourseSlugPage = ({ params: { courseSlug } }: CourseSlugPageProps) => {
  const activeCourse = ALL_COURSES_LIST.find((course) => course.slug === courseSlug);

  if (!activeCourse) {
    return null;
  }

  return (
    <main className="pt-24">
      <div className="mt-10 mb-28 md:my-10 lg:my-28 mx-auto">
        <CourseSelector activeCourse={activeCourse}/>
      </div>
      <div className="lg:pt-[244px] md:pt-[210px] lg:pb-[40px]">
        <GoalsSection goals={activeCourse?.goals}/>
      </div>

      <div className="relative overflow-hidden pt-36 md:pt-0 lg:pb-48 md:pb-24">
        <div className="lg:pt-[200px] md:pt-[210px] lg:pb-[200px] md:pb-[104px] relative z-10">
          <StudyGuideSection/>
        </div>

        <Image
          src={courseProgram}
          alt="Course Program"
          className="object-cover -rotate-90 opacity-50 md:w-3/4 absolute md:top-[1100px] md:-right-24 lg:-right-28 lg:top-[700px]"
        />

        <div className="z-10 relative mt-24">
          <CourseProgramSection course={activeCourse}/>
        </div>
      </div>

      <div className="lg:py-52 py-24">
        <AboutTeacherSection/>
      </div>

      <div className="lg:py-52 md:py-24">
        <StudyFormatsSection registerButton/>

        <div className="mx-auto max-w-screen-2xl mt-12 md:mt-20 lg:my-40">
          <div
            className="mx-2 md:mx-8 px-4 md:px-8 text-primary-white bg-primary-blue rounded-3xl font-unbounded text-2xl lg:text-5xl py-5 md:py-8 text-center">
            + 24 заняття з англійської мови безкоштовно для учнів групового курсу
          </div>
        </div>
      </div>

      <div className="lg:pt-8 pt-24">
        <StudentsStoriesSection withoutBackground/>
      </div>
    </main>
  );
};

export default CourseSlugPage;
