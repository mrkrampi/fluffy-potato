'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { Loader, PlusCircle } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { CreateAllowedEmail } from '@/schemas';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { addAllowedEmail } from '@/actions/add-allowed-email';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export const AddAllowedEmail = () => {
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof CreateAllowedEmail>>({
    resolver: zodResolver(CreateAllowedEmail),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof CreateAllowedEmail>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      try {
        const response = await addAllowedEmail(values);

        if (response.success) {
          toast.success(response.success);
          setOpen(false);
        }
      } catch (e: any) {
        toast.error(e.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5"/>
          <span
            className="sr-only sm:not-sr-only sm:whitespace-nowrap"
          >
            Додати email
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Додати email</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        type="email"
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
                Створити
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
