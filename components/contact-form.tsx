'use client';

import * as z from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { cn } from '@/lib/utils';
import { ContactFormSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SocialEnum } from '@/enums/social.enum';
import { Heading } from '@/components/markup/heading';
import { Section } from '@/components/markup/section';
import { zodResolver } from '@hookform/resolvers/zod';
import { SocialButton } from '@/components/social-button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const GOOGLE_SHEET_ADD_URL = 'https://script.google.com/macros/s/AKfycbwNPRn0gfMPl-2MSpiINTpr6WRFfASnnkuKOiojXRlwn9g1RPwfYkNSEOKXZXYCReBe/exec';

type Props = {
  isModalMode?: boolean;
}

export const ContactForm = ({ isModalMode }: Readonly<Props>) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      request: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    try {
      setIsPending(true);

      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone.replace('+', ''));
      formData.append('request', values.request);

      await fetch(GOOGLE_SHEET_ADD_URL, {
        method: 'POST',
        body: formData,
      });
      form.reset();
      setIsSubmitted(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Section className={cn(isModalMode && 'p-0 md:p-0 lg:p-0 xl:p-0 md:w-[90vw] xl:w-[75vw]')}>
      <div
        className={cn(
          "bg-contact-form bg-cover bg-center rounded-3xl shadow-sm shadow-primary-accent px-4 lg:px-10 py-20 lg:py-24 relative",
          isModalMode && 'lg:px-5'
        )}>
        <div className={cn(
          'top-1/2 -translate-y-1/2 flex items-center justify-center absolute',
          !isSubmitted && 'invisible',
        )}>
          <div
            className="text-primary-white font-unbounded uppercase text-3xl md:text-[48px] lg:text-[64px] leading-[1.1] text-center lg:w-3/4">
            Ваш запит прийнято в обробку
          </div>
        </div>

        <div className={cn(
          isSubmitted ? 'invisible' : '',
          isModalMode && 'lg:grid grid-cols-2 items-center gap-10'
        )}>
          <div>
            <Heading level={4} className={cn(
              "text-center text-[32px]",
              isModalMode && 'lg:text-[64px] leading-[1.1]'
            )}>
              Звʼязатись з нами
            </Heading>

            <p className={cn(
              "xl:w-1/2 text-center xl:text-left xl:text-xl text-primary-white tracking-tighter mb-12 mt-8 xl:my-16",
              isModalMode && 'xl:w-full xl:text-center xl:my-5',
            )}>
              Залишилися до нас питання, або потрібна наша консультація чи допомога з вибором курсу? Заповніть форму зворотнього звʼязку, і
              наш
              менеджер звʼяжеться з вами протягом доби
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="my-12 max-w-sm w-full mx-auto lg:mx-0">
                <div className="md:my-6 xl:my-8">
                  <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-semibold text-base text-primary-white">
                          <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
                          Ваше імʼя
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Імʼя"
                            type="text"
                            disabled={isPending}
                            className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none caret-primary-blue hover:border-b-primary-accent placeholder-shown:hover:border-b-primary-blue placeholder-shown:hover:text-primary-blue text-primary-blue hover:text-primary-accent"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:my-6 xl:my-8">
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-semibold text-base text-primary-white">
                          <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Email"
                            type="email"
                            disabled={isPending}
                            className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none caret-primary-blue hover:border-b-primary-accent placeholder-shown:hover:border-b-primary-blue placeholder-shown:hover:text-primary-blue text-primary-blue hover:text-primary-accent"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:my-6 xl:my-8">
                  <FormField
                    name="phone"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-semibold text-base text-primary-white">
                          <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
                          Контактний номер
                        </FormLabel>
                        <FormControl>
                          <PatternFormat
                            {...field}
                            placeholder="Контактник номер"
                            type="tel"
                            format="+### ## ### ## ##" allowEmptyFormatting mask="_"
                            className="flex h-10 w-full border-input px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-5 bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none caret-primary-blue hover:border-b-primary-accent placeholder-shown:hover:border-b-primary-blue placeholder-shown:hover:text-primary-blue text-primary-blue hover:text-primary-accent"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:my-6 xl:my-8">
                  <FormField
                    name="request"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-semibold text-base text-primary-white">
                          <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
                          Ваш запит
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Ваш запит"
                            type="text"
                            disabled={isPending}
                            className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none caret-primary-blue hover:border-b-primary-accent placeholder-shown:hover:border-b-primary-blue placeholder-shown:hover:text-primary-blue text-primary-blue hover:text-primary-accent"
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-center lg:justify-start gap-x-5 -mx-3">
                <Button
                  size="lg"
                  variant="cta"
                  className="bg-primary-white text-primary-accent rounded-3xl h-50 text-xl font-semibold w-[190px] md:w-52"
                  type="submit"
                  disabled={isPending}
                >
                  Надіслати
                </Button>
                <SocialButton type={SocialEnum.INSTAGRAM}/>
                <SocialButton type={SocialEnum.LINKEDIN}/>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  );
};
