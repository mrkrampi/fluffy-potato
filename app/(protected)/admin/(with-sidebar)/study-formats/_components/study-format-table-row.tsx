'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';
import { Loader, MoreHorizontal } from 'lucide-react';

import { studyFormats } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { formatNumberWithSpaces } from '@/lib/utils';
import { TableCell, TableRow } from '@/components/ui/table';
import { deleteStudyFormat } from '@/actions/delete-study-format';
import { useUpsertStudyFormat } from '@/store/use-upsert-study-format';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type Props = {
  studyFormat: typeof studyFormats.$inferSelect;
}

export const StudyFormatTableRow = ({ studyFormat }: Readonly<Props>) => {
  const { open } = useUpsertStudyFormat();
  const [pending, startTransition] = useTransition();

  const onEditClick = () => {
    open(studyFormat);
  };

  const onDeleteClick = async () => {
    startTransition(async () => {
      try {
        const response = await deleteStudyFormat(studyFormat.id);

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
        {studyFormat.name}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {formatNumberWithSpaces(Number(studyFormat.price))} ₴
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
            <DropdownMenuItem onClick={onEditClick}>Редагувати</DropdownMenuItem>
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
