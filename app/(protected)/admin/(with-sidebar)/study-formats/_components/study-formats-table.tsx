import { studyFormats } from '@/db/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { StudyFormatTableRow } from '@/app/(protected)/admin/(with-sidebar)/study-formats/_components/study-format-table-row';

type Props = {
  studyFormatsList: Array<typeof studyFormats.$inferSelect>;
}

export const StudyFormatsTable = ({ studyFormatsList }: Readonly<Props>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Формати навчання</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Назва
              </TableHead>

              <TableHead className="hidden md:table-cell">
                Ціна
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {studyFormatsList.map((studyFormat) =>
              ((<StudyFormatTableRow key={studyFormat.id} studyFormat={studyFormat}/>)))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
