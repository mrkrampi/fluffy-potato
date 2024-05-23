import { fakeAuthors, posts } from '@/db/schema';
import { Button } from '@/components/ui/button';
import { Publish } from '@/app/(protected)/admin/blog/_components/publish';
import { ArrowLeft, ImageIcon, Loader, SaveIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { EditPostMetadataModal } from '@/app/(protected)/admin/blog/_components/edit-post-metadata-modal';
import { useCoverImage } from '@/hooks/use-cover-image';

type Props = {
  post: typeof posts.$inferSelect;
  onSaveClick: () => void;
  isPending: boolean;
  authors: Array<typeof fakeAuthors.$inferSelect>,
}

export const Toolbar = ({ onSaveClick, post, isPending, authors }: Readonly<Props>) => {
  const router = useRouter();
  const coverImage = useCoverImage();

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
        {
          !post.coverImageUrl && (
            <Button
              onClick={() => coverImage.onOpen(post.id)}
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
            >
              <ImageIcon className="h-4 w-4 mr-2"/>
              Додати ковер
            </Button>
          )
        }

        <EditPostMetadataModal post={post} authors={authors}/>

        <Publish post={post}/>

        <Button
          variant="secondary"
          disabled={isPending}
          onClick={onSaveClick}
        >
          {isPending && <Loader className="h-4 w-4 mr-2 animate-spin"/>}
          {!isPending && <SaveIcon className="h-4 w-4 mr-2"/>}
          Зберегти
        </Button>
      </div>
    </div>
  );
};
