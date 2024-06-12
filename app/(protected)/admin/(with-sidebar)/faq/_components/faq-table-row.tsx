'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';
import { Loader, MoreHorizontal } from 'lucide-react';

import { faqs } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { deleteFaq } from '@/actions/delete-faq';
import { useUpsertFaq } from '@/store/use-upsert-faq';
import { TableCell, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type Props = {
  faq: typeof faqs.$inferSelect;
}

export const FaqTableRow = ({ faq }: Readonly<Props>) => {
  const { open } = useUpsertFaq();
  const [pending, startTransition] = useTransition();

  const onEditClick = () => {
    open(faq);
  };

  const onDeleteClick = async () => {
    startTransition(async () => {
      try {
        const response = await deleteFaq(faq.id);

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
        <span className="line-clamp-2">
          {faq.question}
        </span>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        <span className="line-clamp-2">
          {faq.answer}
        </span>
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
