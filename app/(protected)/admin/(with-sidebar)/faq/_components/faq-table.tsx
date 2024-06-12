import { faqs } from '@/db/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FaqTableRow } from '@/app/(protected)/admin/(with-sidebar)/faq/_components/faq-table-row';

type Props = {
  faqList: Array<typeof faqs.$inferSelect>;
}

export const FaqTable = ({ faqList }: Readonly<Props>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>FAQ</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Питання
              </TableHead>

              <TableHead className="hidden md:table-cell">
                Відповідь
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {faqList.map((faq) =>
              ((<FaqTableRow key={faq.id} faq={faq}/>)))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
