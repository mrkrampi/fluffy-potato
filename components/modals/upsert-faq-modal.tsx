'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState, useTransition } from 'react';

import { UpsertFaq } from '@/schemas';
import { Button } from '@/components/ui/button';
import { upsertFaq } from '@/actions/upsert-faq';
import { FormError } from '@/components/form-error';
import { Textarea } from '@/components/ui/textarea';
import { useUpsertFaq } from '@/store/use-upsert-faq';
import { FormSuccess } from '@/components/form-success';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const UpsertFaqModal = () => {
  const { close, isOpen, faq } = useUpsertFaq();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof UpsertFaq>>({
    resolver: zodResolver(UpsertFaq),
    defaultValues: useMemo(() => ({
      id: faq?.id,
      answer: faq?.answer,
      question: faq?.question,
    }), [faq]),
  });

  useEffect(() => {
    form.setValue('id', faq?.id);
    form.setValue('answer', faq?.answer ?? '');
    form.setValue('question', faq?.question ?? '');
  }, [faq]);

  const onSubmit = (values: z.infer<typeof UpsertFaq>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      const upsertResponse = await upsertFaq(values);

      toast.success(upsertResponse.success);
      close();
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{faq ? 'Редагувати FAQ' : 'Додати FAQ'}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <FormField
                name="question"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Запитання</FormLabel>
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

              <FormField
                name="answer"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Відповідь</FormLabel>
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
                {faq ? 'Оновити' : 'Створити'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
