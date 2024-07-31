'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState, useTransition } from 'react';

import { UpsertFaqCategory } from '@/schemas';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { Textarea } from '@/components/ui/textarea';
import { FormSuccess } from '@/components/form-success';
import { upsertFaqCategory } from '@/actions/upsert-faq-category';
import { useUpsertFaqCategory } from '@/store/use-upsert-faq-category';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const UpsertFaqCategoryModal = () => {
  const { close, isOpen, category } = useUpsertFaqCategory();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof UpsertFaqCategory>>({
    resolver: zodResolver(UpsertFaqCategory),
    defaultValues: useMemo(() => ({
      id: category?.id,
      name: category?.name,
    }), [category]),
  });

  useEffect(() => {
    form.setValue('id', category?.id);
    form.setValue('name', category?.name ?? '');
  }, [category]);

  const onSubmit = (values: z.infer<typeof UpsertFaqCategory>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      const upsertResponse = await upsertFaqCategory(values);

      toast.success(upsertResponse.success);
      close();
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{category ? 'Редагувати категорію' : 'Додати категорію'}</DialogTitle>
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
                    <FormLabel>Назва</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Lorem impsum?"
                        {...field}
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
                {category ? 'Оновити' : 'Створити'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
