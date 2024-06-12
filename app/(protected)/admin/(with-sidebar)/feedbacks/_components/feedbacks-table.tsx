import { feedbacks } from '@/db/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FeedbackTableRow } from '@/app/(protected)/admin/(with-sidebar)/feedbacks/_components/feedback-table-row';

type Props = {
  feedbacksList: Array<typeof feedbacks.$inferSelect>;
}

export const FeedbacksTable = ({ feedbacksList }: Readonly<Props>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Відгуки</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell"/>

              <TableHead>
                Імʼя
              </TableHead>

              <TableHead className="hidden md:table-cell">
                Відгук
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {feedbacksList.map((feedback) =>
              ((<FeedbackTableRow key={feedback.id} feedback={feedback}/>)))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
