'use client';

import Image from 'next/image';
import { toast } from 'sonner';
import { useTransition } from 'react';
import { Loader, MoreHorizontal } from 'lucide-react';

import { feedbacks } from '@/db/schema';
import { useEdgeStore } from '@/lib/edgestore';
import { Button } from '@/components/ui/button';
import { deleteFeedback } from '@/actions/delete-feedback';
import { TableCell, TableRow } from '@/components/ui/table';
import { useUpsertFeedback } from '@/store/use-upsert-feedback';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type Props = {
  feedback: typeof feedbacks.$inferSelect;
}

export const FeedbackTableRow = ({ feedback }: Readonly<Props>) => {
  const { open } = useUpsertFeedback();
  const [pending, startTransition] = useTransition();
  const { edgestore } = useEdgeStore();

  const onEditClick = () => {
    open(feedback);
  };

  const onDeleteClick = async () => {
    startTransition(async () => {
      try {
        await edgestore.publicFiles.delete({ url: feedback.imageUrl });
        const response = await deleteFeedback(feedback.id);

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
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Фото автора"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={feedback.imageUrl}
          width="64"
        />
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {feedback.name}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        <span className="line-clamp-2">
          {feedback.feedback}
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
