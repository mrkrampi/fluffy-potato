'use client';

import Image from 'next/image';
import { toast } from 'sonner';
import { useTransition } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Loader, MoreHorizontal } from 'lucide-react';

import { useEdgeStore } from '@/lib/edgestore';
import { Button } from '@/components/ui/button';
import { IFeedback } from '@/interfaces/model-types';
import { deleteFeedback } from '@/actions/delete-feedback';
import { TableCell, TableRow } from '@/components/ui/table';
import { useUpsertFeedback } from '@/store/use-upsert-feedback';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type Props = {
  feedback: IFeedback;
  index: number;
}

export const FeedbackTableRow = ({ feedback, index }: Readonly<Props>) => {
  const { open } = useUpsertFeedback();
  const [pending, startTransition] = useTransition();
  const { edgestore } = useEdgeStore();

  const onEditClick = () => {
    open(feedback);
  };

  const onDeleteClick = async () => {
    startTransition(async () => {
      try {
        await deleteImage();
        const response = await deleteFeedback(feedback.id);

        if (response.success) {
          toast.success(response.success);
        }
      } catch (error: any) {
        console.log(error);
        toast.error(error.message);
      }
    });
  };

  const deleteImage = async () => {
    try {
      await edgestore.publicFiles.delete({ url: feedback.imageUrl });
    } catch (e) {
    }
  };

  return (
    <Draggable draggableId={feedback.id} index={index}>
      {(provided, snapshot) => (
        <TableRow
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TableCell className="hidden sm:table-cell">
            <Image
              alt="Фото автора"
              className="aspect-square rounded-full object-cover min-w-16 h-16"
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
      )}
    </Draggable>
  );
};
