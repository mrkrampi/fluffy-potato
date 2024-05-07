'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { useSearchParams } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import { LoginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import { CardWrapper } from '@/components/auth/card-wrapper';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export const SignInForm = () => {
  const searchParams = useSearchParams();
  const urlError = searchParams.get('error') === 'OAuthAccountNotLinked'
    ? 'Email already in use with different provider!'
    : '';

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(async () => {
      try {
        // const data = await login(values);
        //
        // if (data?.error) {
        //   form.reset();
        //   setError(data?.error);
        // }
        //
        // if (data?.success) {
        //   form.reset();
        //   setSuccess(data?.success);
        // }
        //
        // if (data?.twoFactor) {
        //   setShowTwoFactor(true);
        // }
      } catch {
        setError('Something went wrong');
      }
    });
  };

  return (
    <CardWrapper
      headerLabel="Вітаємо"
      backButtonLabel="Немає акаунту?"
      backButtonHref="/auth/sign-up"
    >
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
                      placeholder="john.doe@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  {/*<Button*/}
                  {/*  variant="link"*/}
                  {/*  size="sm"*/}
                  {/*  asChild*/}
                  {/*  className="px-0 font-normal"*/}
                  {/*>*/}
                  {/*  <Link href="/auth/reset">*/}
                  {/*    Forgot password?*/}
                  {/*  </Link>*/}
                  {/*</Button>*/}
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError}/>
          <FormSuccess message={success}/>
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            Авторизуватись
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
