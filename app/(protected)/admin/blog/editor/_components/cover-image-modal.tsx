'use client';

import { toast } from 'sonner';
import { useState } from 'react';

import { useEdgeStore } from '@/lib/edgestore';
import { updatePostData } from '@/actions/update-post';
import { useCoverImage } from '@/hooks/use-cover-image';
import { SingleImageDropzone } from '@/components/single-image-dropzone';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

export const CoverImageModal = () => {
  const coverImage = useCoverImage();
  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { edgestore } = useEdgeStore();

  const onChange = async (file?: File) => {
    if (!file) {
      return;
    }

    setIsSubmitting(true);
    setFile(file);

    const uploadImageResponse = await edgestore.publicFiles.upload({
      file,
      options: {
        replaceTargetUrl: coverImage.url,
      },
    });

    const updateResponse = await updatePostData(coverImage.postId!, { coverImageUrl: uploadImageResponse.url });
    toast.success(updateResponse.success);

    onClose();
  };

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">
            Ковер
          </h2>
        </DialogHeader>

        <SingleImageDropzone
          className="w-full outline-none"
          onChange={onChange}
          disabled={isSubmitting}
          value={file}
        />
      </DialogContent>
    </Dialog>
  );
};
