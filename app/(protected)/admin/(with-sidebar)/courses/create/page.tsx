import { getStudyFormats } from '@/db/pricing-queries';
import { CourseForm } from '@/app/(protected)/admin/(with-sidebar)/courses/_components/course-form';

const CreateCoursePage = async () => {
  const studyFormatsData = getStudyFormats();

  const [
    studyFormats,
  ] = await Promise.all([
    studyFormatsData,
  ]);

  return (
    <div>
      <CourseForm
        studyFormats={studyFormats}
      />
    </div>
  );
};

export default CreateCoursePage;
