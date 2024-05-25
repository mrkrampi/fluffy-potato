'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';
import { Loader, MoreHorizontal } from 'lucide-react';

import { allowedEmails } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { TableCell, TableRow } from '@/components/ui/table';
import { deleteAllowedEmail } from '@/actions/delete-allowed-email';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type Props = {
  email: typeof allowedEmails.$inferSelect;
}

export const AllowedEmailTableRow = ({ email }: Readonly<Props>) => {
  const [pending, startTransition] = useTransition();

  const onDeleteClick = async () => {
    startTransition(async () => {
      try {
        const response = await deleteAllowedEmail(email.email);

        if (response.success) {
          toast.success(response.success);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    });
  };

  return (
    <TableRow>
      <TableCell className="hidden md:table-cell">
        {email.email}
      </TableCell>

      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-haspopup="true"
              size="icon"
              variant="ghost"
            >
              {pending ? <Loader className="spin-in h-4 w-4"/> : <MoreHorizontal className="h-4 w-4"/>}
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Дії</DropdownMenuLabel>
            <DropdownMenuItem
              disabled={pending}
              onClick={onDeleteClick}
            >
              Видалити
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
