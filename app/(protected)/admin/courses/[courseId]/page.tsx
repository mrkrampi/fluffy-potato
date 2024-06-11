import { getCourseById } from '@/db/course-queries';
import { redirect } from 'next/navigation';
import { CourseForm } from '@/app/(protected)/admin/courses/_components/course-form';

type Props = {
  params: {
    courseId: string;
  }
}

const EditCoursePage = async ({ params }: Readonly<Props>) => {
  const courseData = getCourseById(params.courseId);

  const [
    course,
  ] = await Promise.all([
    courseData,
  ]);

  if (!course) {
    redirect('/admin/courses');
  }

  return (
    <CourseForm
      course={course}
    />
  )
};

export default EditCoursePage;
