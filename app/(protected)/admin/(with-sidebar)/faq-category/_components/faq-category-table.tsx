import { IFaqCategory } from '@/interfaces/model-types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FaqCategoryTableRow } from '@/app/(protected)/admin/(with-sidebar)/faq-category/_components/faq-category-table-row';

type Props = {
  categories: Array<IFaqCategory>;
}

export const FaqCategoryTable = ({ categories }: Readonly<Props>) => {
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
                Назва
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {categories.map((category) =>
              ((<FaqCategoryTableRow key={category.id} category={category}/>)))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
