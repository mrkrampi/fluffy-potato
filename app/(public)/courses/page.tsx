import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { getAllCourses } from '@/db/course-queries';

export const metadata: Metadata = {
  title: siteConfig.coursesTitle,
  description: siteConfig.coursesDescription,
  alternates: {
    canonical: `${process.env.BASE_URL}/courses`,
  }
};

const CoursesPage = async () => {
  const courses = await getAllCourses();
  return redirect(`/courses/${courses.at(0)?.slug}`);
};

export default CoursesPage;
