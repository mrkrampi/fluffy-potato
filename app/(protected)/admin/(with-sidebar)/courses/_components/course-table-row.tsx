'use client';

import { toast } from 'sonner';
import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Loader, MoreHorizontal } from 'lucide-react';

import { formatDate } from '@/lib/utils';
import { courses } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { deleteCourse } from '@/actions/delete-course';
import { TableCell, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

type Props = {
  course: typeof courses.$inferSelect;
}

export const CourseTableRow = ({ course }: Readonly<Props>) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const onDeletePost = () => {
    startTransition(async () => {
      try {
        const response = await deleteCourse(course.id);

        if (response.success) {
          toast.success(response.success);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    });
  };

  const onEditClick = () => {
    router.push(`/admin/courses/${course.id}`);
  }

  return (
    <TableRow>
      <TableCell className="font-medium">
        {course.name}
      </TableCell>

      <TableCell className="hidden md:table-cell">
        {course.startDate ? formatDate(course.startDate) : ''}
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
