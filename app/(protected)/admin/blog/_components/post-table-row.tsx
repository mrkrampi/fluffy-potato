'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';
import { Loader, MoreHorizontal } from 'lucide-react';

import { posts, users } from '@/db/schema';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { deletePost } from '@/actions/delete-post';
import { TableCell, TableRow } from '@/components/ui/table';
import { updatePublishStatus } from '@/actions/update-publish-status';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { formatTimestamp } from '@/lib/utils';

type Props = {
  post: typeof posts.$inferSelect & { author: typeof users.$inferSelect };
}

export const PostTableRow = ({ post }: Readonly<Props>) => {
  const [pending, startTransition] = useTransition();

  const onPostStatusChange = () => {
    startTransition(async () => {
      try {
        const response = await updatePublishStatus(post.id, !post.isPublished);

        if (response.success) {
          toast.success(response.success)
        }
      } catch (error: any) {
        toast.error(error.message)
      }
    })
  }

  const onDeletePost = () => {
    startTransition(async () => {
      try {
        const response = await deletePost(post.id);

        if (response.success) {
          toast.success(response.success)
        }
      } catch (error: any) {
        toast.error(error.message)
      }
    })
  }

  return (
    <TableRow>
      <TableCell className="font-medium">
        {post.title}
      </TableCell>

      <TableCell>
        <Badge variant="outline">{post.isPublished ? 'Опубліковано' : 'Чернетка'}</Badge>
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {post.author.name}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {formatTimestamp(post.updatedAt)}
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
            <DropdownMenuItem>Редагувати</DropdownMenuItem>
            <DropdownMenuItem
              disabled={pending}
              onClick={onPostStatusChange}
            >
              {post.isPublished ? 'Відмінити публікацію' : 'Опублікувати'}
            </DropdownMenuItem>
            <DropdownMenuItem
              disabled={pending}
              onClick={onDeletePost}
            >
              Видалити
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};
