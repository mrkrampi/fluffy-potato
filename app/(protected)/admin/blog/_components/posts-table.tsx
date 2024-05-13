import { posts, users } from '@/db/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PostTableRow } from '@/app/(protected)/admin/blog/_components/post-table-row';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Props = {
  postsList: Array<typeof posts.$inferSelect & { author: typeof users.$inferSelect }>;
}

export const PostsTable = ({ postsList }: Readonly<Props>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Статті</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Заголовк
              </TableHead>

              <TableHead>
                Статус
              </TableHead>

              <TableHead className="hidden md:table-cell">
                Автор
              </TableHead>

              <TableHead className="hidden md:table-cell">
                Остання зміна
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {postsList.map((post) =>
              ((<PostTableRow key={post.id} post={post}/>)))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
