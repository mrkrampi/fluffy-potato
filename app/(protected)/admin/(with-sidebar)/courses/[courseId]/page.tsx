import { getCourseById } from '@/db/course-queries';
import { redirect } from 'next/navigation';
import { CourseForm } from '@/app/(protected)/admin/(with-sidebar)/courses/_components/course-form';
import { getStudyFormats } from '@/db/pricing-queries';

export const fetchCache = 'force-no-store';

type Props = {
  params: {
    courseId: string;
  }
}

const EditCoursePage = async ({ params }: Readonly<Props>) => {
  const courseData = getCourseById(params.courseId);
  const studyFormatsData = getStudyFormats();

  const [
    course,
    studyFormats,
  ] = await Promise.all([
    courseData,
    studyFormatsData,
  ]);

  if (!course) {
    redirect('/admin/courses');
  }

  return (
    <CourseForm
      studyFormats={studyFormats}
      course={course}
    />
  )
};

export default EditCoursePage;
