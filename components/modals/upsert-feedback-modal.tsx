'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState, useTransition } from 'react';

import { UpsertAuthor, UpsertFeedback } from '@/schemas';
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
import { useUpsertFeedback } from '@/store/use-upsert-feedback';
import { upsertFeedback } from '@/actions/upsert-feedback';
import { feedbacks } from '@/db/schema';
import { Textarea } from '@/components/ui/textarea';

export const UpsertFeedbackModal = () => {
  const { close, isOpen, feedback } = useUpsertFeedback();
  const [pending, startTransition] = useTransition();
  const [file, setFile] = useState<File | string | undefined>(feedback?.imageUrl);
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const { edgestore } = useEdgeStore();

  const form = useForm<z.infer<typeof UpsertFeedback>>({
    resolver: zodResolver(UpsertFeedback),
    defaultValues: useMemo(() => ({
      id: feedback?.id,
      name: feedback?.name,
      feedback: feedback?.feedback,
      imageUrl: feedback?.imageUrl,
      imageAlt: feedback?.imageAlt,
    }), [feedback]),
  });

  useEffect(() => {
    form.setValue('id', feedback?.id);
    form.setValue('name', feedback?.name ?? '');
    form.setValue('feedback', feedback?.feedback ?? '');
    form.setValue('imageUrl', feedback?.imageUrl ?? '');
    form.setValue('imageAlt', feedback?.imageAlt ?? '');
    setFile(feedback?.imageUrl);
  }, [feedback]);

  const onSubmit = (values: z.infer<typeof UpsertFeedback>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      const imageUrl = await uploadImage();

      const upsertResponse = await upsertFeedback({
        ...values,
        imageUrl,
      });

      toast.success(upsertResponse.success);
      close();
    });
  };

  const uploadImage = async (): Promise<string> => {
    if (file === feedback?.imageUrl) {
      return feedback?.imageUrl ?? '';
    }

    const uploadImageResponse = await edgestore.publicFiles.upload({
      file: file as File,
      options: {
        replaceTargetUrl: feedback?.imageUrl,
      },
    });

    return uploadImageResponse.url;
  };

  const onChange = (file?: File) => {
    setFile(file);
    form.setValue('imageUrl', file);
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{feedback ? 'Редагувати відгук' : 'Додати вігук'}</DialogTitle>
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
                name="feedback"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Відгук</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Lorem impsum..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="imageUrl"
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

              <FormField
                name="imageAlt"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Підпис фото</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="lorem ipsum"
                        type="text"
                        disabled={pending}
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
                {feedback ? 'Оновити' : 'Створити'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
