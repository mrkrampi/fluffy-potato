import { allowedEmails } from '@/db/schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AllowedEmailTableRow } from '@/app/(protected)/admin/settings/allowed-emails/_components/allowed-email-table-row';

type Props = {
  emails: Array<typeof allowedEmails.$inferSelect>;
}

export const AllowedEmailsTable = ({ emails }: Readonly<Props>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Дозволені Email</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                Email
              </TableHead>

              <TableHead>
                <span className="sr-only">Дії</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {emails.map((email) =>
              ((<AllowedEmailTableRow key={email.id} email={email}/>)))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
