import * as z from 'zod';
import { toast } from 'sonner';
import { Loader, SettingsIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { posts } from '@/db/schema';
import { UpdatePostSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { updatePostData } from '@/actions/update-post';
import { FormSuccess } from '@/components/form-success';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type Props = {
  post: typeof posts.$inferSelect;
}

export const EditPostMetadataModal = ({ post }: Readonly<Props>) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof UpdatePostSchema>>({
    resolver: zodResolver(UpdatePostSchema),
    defaultValues: {
      title: post.title,
      slug: post.slug,
      metadata: '',
    },
  });

  const onSubmit = (values: z.infer<typeof UpdatePostSchema>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      try {
        const data = await updatePostData(post.id, values);

        if (data.success) {
          toast.success(data.success);
          setIsOpen(false);
        }
      } catch (error: any) {
        form.reset();
        setError(error.message);
      }
    });
  };

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button>
          <SettingsIcon className="h-4 w-4 mr-2"/>
          Налаштування
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Налаштування</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Заголовок</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Lorem ipsum..."
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="slug"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="lorem-ipsum"
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="metadata"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Metadata</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Metadata..."
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <FormError message={error}/>
            <FormSuccess message={success}/>

            <div className="flex gap-4 justify-end">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Скасувати
                </Button>
              </DialogClose>
              <Button disabled={isPending} onClick={form.handleSubmit(onSubmit)}>
                {isPending && <Loader className="h-4 w-4 mr-2 animate-spin"/>}
                Оновити
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
