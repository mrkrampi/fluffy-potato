import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface CourseTabProps {
  selected: boolean;
  title: string;
  slug: string;
}

export const CourseTab = ({ selected, title, slug }: CourseTabProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      className={
        cn(
          'h-full py-6 lg:py-10 border-2 border-primary-white lg:hover:border-transparent text-primary-white font-medium text-xl lg:text-3xl tracking-tight rounded-full min-w-[290px] lg:min-w-[365px] text-center',
          selected && 'bg-primary-accent border-primary-accent',
        )
      }>
      <Link href={`/courses/${slug}`}>
        <span dangerouslySetInnerHTML={{ __html: title }}/>
      </Link>
    </Button>
  );
};