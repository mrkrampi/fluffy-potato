import { toast } from 'sonner';
import { useState, useTransition } from 'react';
import { Check, Copy, Globe } from 'lucide-react';

import { posts } from '@/db/schema';
import { useOrigin } from '@/hooks/use-origin';
import { Button } from '@/components/ui/button';
import { updatePublishStatus } from '@/actions/update-publish-status';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface PublishProps {
  post: typeof posts.$inferSelect;
}

export const Publish = ({ post }: PublishProps) => {
  const origin = useOrigin();

  const [copied, setCopied] = useState<boolean>(false);
  const [pending, startTransition] = useTransition();

  const url = `${origin}/blog/${post?.slug}`;

  const onPublishToggle = () => {
    startTransition(async () => {
      try {
        const response = await updatePublishStatus(post.id, !post.isPublished);

        if (response.success) {
          toast.success(response.success);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    });
  };

  const onCopy = () => {
    void navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => setCopied(false), 1e3);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          {post.isPublished ? 'Опубліковано' : 'Опублікувати'}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-72"
        align="end"
        alignOffset={8}
        forceMount
      >
        {
          post.isPublished
            ? (
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    disabled
                    type="url"
                    className="flex-1 text-xs px-2 border rounded-l-md h-8 bg-muted truncate"
                    value={url}
                  />
                  <Button
                    onClick={onCopy}
                    disabled={copied}
                    className="h-8 rounded-l-none"
                  >
                    {copied ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                  </Button>
                </div>

                <Button
                  size="sm"
                  className="w-full text-xs"
                  onClick={onPublishToggle}
                  disabled={pending}
                >
                  Відмінити публікацію
                </Button>
              </div>
            )
            : (
              <div className="flex flex-col items-center justify-center">
                <Globe className="h-8 w-8 text-muted-foreground mb-2"/>
                <p className="text-sm font-medium mb-2">
                  Опублікувати цей пост
                </p>
                <Button
                  disabled={pending}
                  onClick={onPublishToggle}
                  className="text-xs w-full"
                  size="sm"
                >
                  Опубліуквати
                </Button>
              </div>
            )
        }
      </PopoverContent>
    </Popover>
  );
};
