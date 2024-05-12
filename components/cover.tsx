'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ImageIcon, X } from 'lucide-react';
import { useCoverImage } from '@/hooks/use-cover-image';
import { useParams } from 'next/navigation';

interface CoverProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ preview, url }: CoverProps) => {
  const coverImage = useCoverImage();
  const params = useParams();

  const onRemoveCover = async () => {
    if (url) {
      // await edgestore.publicFiles.delete({ url });
    }
    // await removeCover({ id: params.documentId as Id<'documents'> });
  };

  return (
    <div className={cn(
      'w-full relative h-[35vh] group',
      !url && 'h-[12vh]',
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
        url && !preview && (
          <div className="opacity-0 group-hover:opacity-100 transition absolute bottom-5 right-5 flex items-center gap-x-2">
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
              onClick={() => coverImage.onReplace(url)}
            >
              <ImageIcon className="h-4 w-4 mr-2"/>
              Change cover
            </Button>
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
              onClick={onRemoveCover}
            >
              <X className="h-4 w-4 mr-2"/>
              Remove
            </Button>
          </div>
        )
      }
    </div>
  );
};

// Cover.Skeleton = function CoverSkeleton() {
//   return (
//     <Skeleton className="w-full h-[12vh]"/>
//   )
// }
