'use client';

import Image from 'next/image';
import { ImageIcon, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useEdgeStore } from '@/lib/edgestore';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useCoverImage } from '@/hooks/use-cover-image';
import { updatePostData } from '@/actions/update-post';

interface CoverProps {
  postId: string;
  url: string | null;
}

export const Cover = ({ url, postId }: CoverProps) => {
  const { edgestore } = useEdgeStore();

  const coverImage = useCoverImage();

  const onRemoveCover = async () => {
    if (url) {
      await edgestore.publicFiles.delete({ url });
      await updatePostData(postId, { coverImageUrl: null });
    }
  };

  return (
    <div className={cn(
      'w-full relative h-[35vh] group',
      !url && 'h-0',
      url && 'bg-muted',
    )}>
      {
        !!url && (
          <Image
            src={url}
            alt="Cover Image"
            fill
            className="object-cover"
          />
        )
      }
      {
        url && (
          <div className="opacity-0 group-hover:opacity-100 transition absolute bottom-5 right-5 flex items-center gap-x-2">
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
              onClick={() => coverImage.onReplace(postId, url)}
            >
              <ImageIcon className="h-4 w-4 mr-2"/>
              Змінити зображення
            </Button>
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
              onClick={onRemoveCover}
            >
              <X className="h-4 w-4 mr-2"/>
              Видалити
            </Button>
          </div>
        )
      }
    </div>
  );
};

Cover.Skeleton = function CoverSkeleton() {
  return (
    <Skeleton className="w-full h-[12vh]"/>
  );
};
