import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { ALL_COURSES_LIST } from '@/consts/courses';
import { CourseSelector } from '@/app/(public)/courses/[courseSlug]/_components/course-selector';
import { GoalsSection } from '@/app/(public)/courses/[courseSlug]/_components/goals-section';
import { StudyGuideSection } from '@/app/(public)/courses/[courseSlug]/_components/study-guide-section';

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
      <div className="lg:pt-[200px] md:pt-[210px] lg:pb-[200px] md:pb-[104px]">
        <StudyGuideSection/>
      </div>
    </main>
  );
};

export default CourseSlugPage;
