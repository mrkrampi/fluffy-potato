'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState, useTransition } from 'react';

import { UpsertAuthor } from '@/schemas';
import { Input } from '@/components/ui/input';
import { useEdgeStore } from '@/lib/edgestore';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { upsertAuthor } from '@/actions/upsert-author';
import { FormSuccess } from '@/components/form-success';
import { useUpsertAuthor } from '@/store/use-upsert-author';
import { SingleImageDropzone } from '@/components/single-image-dropzone';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const UpsertAuthorModal = () => {
  const { close, isOpen, author } = useUpsertAuthor();
  const [pending, startTransition] = useTransition();
  const [file, setFile] = useState<File | string | undefined>(author?.imageUrl);
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const { edgestore } = useEdgeStore();

  const form = useForm<z.infer<typeof UpsertAuthor>>({
    resolver: zodResolver(UpsertAuthor),
    defaultValues: useMemo(() => ({
      id: author?.id,
      name: author?.name ?? '',
      position: author?.position ?? '',
      image: author?.imageUrl,
    }), [author]),
  });

  useEffect(() => {
    form.setValue('id', author?.id);
    form.setValue('name', author?.name ?? '');
    form.setValue('position', author?.position ?? '');
    form.setValue('image', author?.imageUrl);
    setFile(author?.imageUrl);
  }, [author]);

  const onSubmit = (values: z.infer<typeof UpsertAuthor>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      const imageUrl = await uploadImage();

      const upsertResponse = await upsertAuthor({
        ...values,
        image: imageUrl,
      });

      toast.success(upsertResponse.success);
      close();
    });
  };

  const uploadImage = async (): Promise<string> => {
    if (file === author?.imageUrl) {
      return author?.imageUrl ?? '';
    }

    const uploadImageResponse = await edgestore.publicFiles.upload({
      file: file as File,
      options: {
        replaceTargetUrl: author?.imageUrl,
      },
    });

    return uploadImageResponse.url;
  };

  const onChange = (file?: File) => {
    setFile(file);
    form.setValue('image', file);
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{author ? 'Редагувати автора' : 'Створити автора'}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Імʼя</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        type="text"
                        disabled={pending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="position"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Підпис</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="lorem-ipsum"
                        type="text"
                        disabled={pending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="image"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Фото</FormLabel>
                    <FormControl>
                      <SingleImageDropzone
                        className="w-full outline-none h-40"
                        onChange={onChange}
                        disabled={pending}
                        value={file}
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
              <Button
                disabled={pending}
                onClick={form.handleSubmit(onSubmit)}
              >
                {pending && <Loader className="h-4 w-4 mr-2 animate-spin"/>}
                {author ? 'Оновити' : 'Створити'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
