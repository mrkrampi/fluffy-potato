import { posts } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { Publish } from '@/app/(protected)/admin/blog/_components/publish';
import { ArrowLeft, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EditPostMetadataModal } from '@/app/(protected)/admin/blog/_components/edit-post-metadata-modal';

type Props = {
  post: typeof posts.$inferSelect;
  onSaveClick: () => void;
  isPending: boolean;
}

export const TopPanel = ({ onSaveClick, post, isPending}: Readonly<Props>) => {
  const router = useRouter();

  const onBackButtonClick = () => {
    router.push('/admin/blog');
  };

  return (
    <div className="p-3 flex justify-between gap-5 border-b shadow-md">
      <div className="flex items-center gap-5">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBackButtonClick}
        >
          <ArrowLeft/>
        </Button>

        <div>
          {post.title}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <EditPostMetadataModal post={post}/>

        <Publish post={post}/>

        <Button
          variant="secondary"
          disabled={isPending}
          onClick={onSaveClick}
        >
          {isPending && <Loader className="h-4 w-4 mr-2 animate-spin"/>}
          Зберегти
        </Button>
      </div>
    </div>
  );
};
