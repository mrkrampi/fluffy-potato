'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCurrentUser } from '@/hooks/use-current-user';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { UpdateUserSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { updateUser } from '@/actions/update-user';

const SettingsPage = () => {
  const session = useCurrentUser();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof UpdateUserSchema>>({
    resolver: zodResolver(UpdateUserSchema),
    defaultValues: {
      name: session?.name ?? '',
    },
  });

  const onSubmit = (values: z.infer<typeof UpdateUserSchema>) => {
    console.log(values);
    setError('');
    setSuccess('');

    startTransition(async () => {
      try {
        const data = await updateUser(values);

        if (data.success) {
          toast.success(data.success);
        }
      } catch (error: any) {
        form.reset();
        setError(error.message);
      }
    });
  };

  return (
    <>
      <Card x-chunk="dashboard-04-chunk-1">
        <CardHeader>
          <CardTitle>Ваше імʼя</CardTitle>
        </CardHeader>
        <CardContent>
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
              </div>

              <FormError message={error}/>
              <FormSuccess message={success}/>

              <div className="flex gap-4 justify-end">
                <Button disabled={pending} onClick={form.handleSubmit(onSubmit)}>
                  {pending && <Loader className="h-4 w-4 mr-2 animate-spin"/>}
                  Оновити
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default SettingsPage;
