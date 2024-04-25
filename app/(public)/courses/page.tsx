import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { COURSES_LIST } from '@/consts/courses';

export const metadata: Metadata = {
  title: siteConfig.coursesTitle,
  description: siteConfig.coursesDescription,
};

const CoursesPage = () => {
  const firstCourseSlug = COURSES_LIST.at(0)?.slug;
  return redirect(`/courses/${firstCourseSlug}`);
};

export default CoursesPage;
