import { CoursesTable } from '@/app/(protected)/admin/courses/_components/courses-table';
import { getAllCourses } from '@/db/course-queries';

const CoursesPage = async () => {
  const coursesData = getAllCourses();

  const [courses] = await Promise.all([coursesData]);

  return (
    <div>
      <div className="ml-auto flex items-center gap-2">
        {/*<CreatePostModal/>*/}
      </div>

      <CoursesTable coursesList={courses}/>
    </div>
  )
};

export default CoursesPage;
