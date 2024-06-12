'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState, useTransition } from 'react';

import { UpsertFeedback, UpsertStudyFormat } from '@/schemas';
import { Input } from '@/components/ui/input';
import { useEdgeStore } from '@/lib/edgestore';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { Textarea } from '@/components/ui/textarea';
import { FormSuccess } from '@/components/form-success';
import { upsertFeedback } from '@/actions/upsert-feedback';
import { useUpsertFeedback } from '@/store/use-upsert-feedback';
import { SingleImageDropzone } from '@/components/single-image-dropzone';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useUpsertStudyFormat } from '@/store/use-upsert-study-format';
import { upsertStudyFormat } from '@/actions/upsert-study-format';
import { FormFieldsArray } from '@/components/form-fields-array';

export const UpsertStudyFormatModal = () => {
  const { close, isOpen, studyFormat } = useUpsertStudyFormat();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof UpsertStudyFormat>>({
    resolver: zodResolver(UpsertStudyFormat),
    defaultValues: useMemo(() => ({
      id: studyFormat?.id,
      name: studyFormat?.name,
      items: studyFormat?.items ?? [],
      price: studyFormat?.price,
    }), [studyFormat]),
  });

  const { control } = form;

  useEffect(() => {
    form.setValue('id', studyFormat?.id);
    form.setValue('name', studyFormat?.name ?? '');
    form.setValue('items', studyFormat?.items ?? []);
    form.setValue('price', studyFormat?.price ?? '');
  }, [studyFormat]);

  const onSubmit = (values: z.infer<typeof UpsertStudyFormat>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      const upsertResponse = await upsertStudyFormat(values);

      toast.success(upsertResponse.success);
      close();
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{studyFormat ? 'Редагувати формат навчання' : 'Додати формат навчання'}</DialogTitle>
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
                name="price"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ціна</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="1500"
                        type="number"
                        disabled={pending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormFieldsArray
                control={control}
                name="items"
                label="Опис"
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
                {studyFormat ? 'Оновити' : 'Створити'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
