import { fakeAuthors } from '@/db/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AuthorTableRow } from '@/app/(protected)/admin/(with-sidebar)/fake-authors/_components/author-table-row';

type Props = {
  authors: Array<typeof fakeAuthors.$inferSelect>;
}

export const AuthorsTable = ({ authors }: Readonly<Props>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Автори</CardTitle>
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
                Підпис
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {authors.map((author) =>
              ((<AuthorTableRow key={author.id} author={author}/>)))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
