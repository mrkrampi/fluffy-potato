'use client';

import { toast } from 'sonner';
import dynamic from 'next/dynamic';
import { Loader } from 'lucide-react';
import { useMemo, useState, useTransition } from 'react';

import { fakeAuthors, posts } from '@/db/schema';
import { Cover } from '@/components/cover';
import { PartialBlock } from '@blocknote/core';
import { useEdgeStore } from '@/lib/edgestore';
import { updatePostData } from '@/actions/update-post';
import { Toolbar } from '@/app/(protected)/admin/blog/editor/_components/toolbar';

type Props = {
  post: typeof posts.$inferSelect;
  authors: Array<typeof fakeAuthors.$inferSelect>;
}

export const PostEditor = ({ post, authors }: Readonly<Props>) => {
  const Editor = useMemo(
    () => dynamic(() => import('@/components/editor'),
      {
        ssr: false,
        loading: () => (
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader className="animate-spin w-12 h-12"/>
          </div>
        )
      }),
    []);

  const [pending, startTransition] = useTransition();
  const [content, setContent] = useState<string>(post.content ?? '');
  const [htmlContent, setHtmlContent] = useState<string>(post.htmlContent ?? '');

  const { edgestore } = useEdgeStore();

  const onSaveClick = () => {
    startTransition(async () => {
      try {
        await removeRedundantImages();

        const response = await updatePostData(post.id, {
          content,
          htmlContent,
        });

        if (response.success) {
          toast.success(response.success);
        }
      } catch (e) {
        console.log(e);
      }
    });
  };

  const removeRedundantImages = async () => {
    const initialContextBlocks = post.content ? JSON.parse(post.content) as Array<PartialBlock> : undefined;
    const contentBlocks = content ? JSON.parse(content) as Array<PartialBlock> : undefined;

    const initialContentImagesUrls = getAllImgUrls(initialContextBlocks);
    const currentContentImagesUrls = getAllImgUrls(contentBlocks);

    const removedImagesUrls = initialContentImagesUrls.filter((url: string) => !currentContentImagesUrls.includes(url));

    const removeFromEdgeStore = removedImagesUrls.map((url: string) => edgestore.publicFiles.delete({ url }));
    await Promise.all(removeFromEdgeStore);
  };

  const getAllImgUrls = (blocks: Array<PartialBlock> = []): Array<string> => {
    let urls: Array<string> = [];

    const collectUrls = (blocks: Array<PartialBlock> = []) => {
      if (!blocks?.length) {
        return;
      }

      blocks.forEach(block => {
        if (block.type === 'image') {
          urls.push(block.props?.url || '');
        }

        collectUrls(block.children);
      });
    };

    collectUrls(blocks);
    return urls;
  };

  const handleChange = (content: string, htmlContent: string) => {
    setContent(content);
    setHtmlContent(htmlContent);
  };

  return (
    <div className="h-full bg-white pb-80">
      <Toolbar
        post={post}
        isPending={pending}
        onSaveClick={onSaveClick}
        authors={authors}
      />

      <Cover postId={post.id} url={post.coverImageUrl}/>

      <div className="p-5 bg-white max-w-[850px] mx-auto">
        <Editor
          initialContent={post.content ?? undefined}
          editable={!pending}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
