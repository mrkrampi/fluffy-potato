import { courses } from '@/db/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CourseTableRow } from '@/app/(protected)/admin/courses/_components/course-table-row';

type Props = {
  coursesList: Array<typeof courses.$inferSelect>;
}

export const CoursesTable = ({ coursesList }: Readonly<Props>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Курси</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Назва
              </TableHead>

              <TableHead>
                Початок курсу
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {coursesList.map((course) =>
              ((<CourseTableRow key={course.id} course={course}/>)))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
