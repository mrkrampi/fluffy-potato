import Link from 'next/link';
import { PlusCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getAllCourses } from '@/db/course-queries';
import { CoursesTable } from '@/app/(protected)/admin/(with-sidebar)/courses/_components/courses-table';

const CoursesPage = async () => {
  const coursesData = getAllCourses();

  const [courses] = await Promise.all([coursesData]);

  return (
    <div>
      <div className="w-full my-2 flex justify-end">
        <Button asChild size="sm" className="h-8 gap-1">
          <Link href="courses/create">
            <PlusCircle className="h-3.5 w-3.5"/>
            <span
              className="sr-only sm:not-sr-only sm:whitespace-nowrap"
            >
            Додати курс
          </span>
          </Link>
        </Button>
      </div>

      <CoursesTable coursesList={courses}/>
    </div>
  );
};

export default CoursesPage;
