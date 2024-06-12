'use client';

import Image from 'next/image';
import { toast } from 'sonner';
import { useTransition } from 'react';
import { Loader, MoreHorizontal } from 'lucide-react';

import { fakeAuthors } from '@/db/schema';
import { useEdgeStore } from '@/lib/edgestore';
import { Button } from '@/components/ui/button';
import { deleteAuthor } from '@/actions/delete-author';
import { TableCell, TableRow } from '@/components/ui/table';
import { useUpsertAuthor } from '@/store/use-upsert-author';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type Props = {
  author: typeof fakeAuthors.$inferSelect;
}

export const AuthorTableRow = ({ author }: Readonly<Props>) => {
  const { open } = useUpsertAuthor();
  const [pending, startTransition] = useTransition();
  const { edgestore } = useEdgeStore();

  const onEditClick = () => {
    open(author);
  };

  const onDeleteClick = async () => {
    startTransition(async () => {
      try {
        await edgestore.publicFiles.delete({ url: author.imageUrl });
        const response = await deleteAuthor(author.id);

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
          src={author.imageUrl}
          width="64"
        />
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {author.name}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {author.position}
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
