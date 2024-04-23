import { redirect } from 'next/navigation';
import { COURSES_LIST } from '@/consts/courses';

const CoursesPage = () => {
  const firstCourseSlug = COURSES_LIST.at(0)?.slug;
  return redirect(`courses/${firstCourseSlug}`);
};

export default CoursesPage;
