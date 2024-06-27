'use client';

import * as z from 'zod';
import { useState } from 'react';
import { Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SocialEnum } from '@/enums/social.enum';
import { courses, studyFormats } from '@/db/schema';
import { CourseRegisterFormSchema } from '@/schemas';
import { Heading } from '@/components/markup/heading';
import { SocialButton } from '@/components/social-button';
import { cn, formatDate, formatNumberWithSpaces } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

type Props = {
  studyFormat: typeof studyFormats.$inferSelect;
  course?: typeof courses.$inferSelect;
}

export const RegisterToCourseModal = ({ studyFormat, course }: Readonly<Props>) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof CourseRegisterFormSchema>>({
    resolver: zodResolver(CourseRegisterFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof CourseRegisterFormSchema>) => {
    try {
      setIsPending(true);

      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('phone', values.phone.replace('+', ''));

      form.reset();
      setIsSubmitted(true);
    } finally {
      setIsPending(false);
    }
  };

  if (!course) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="cta"
          className="bg-primary-white mt-6 text-primary-accent rounded-3xl py-3 font-semibold md:w-52 font-onest"
        >
          Записатись
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] p-0 border-0 focus-visible:outline-none">
        <DialogHeader className="relative pt-16 pb-14 px-12 bg-register-modal bg-cover">
          <div className={cn(isSubmitted ? 'invisible' : '')}>
            <Heading>
              Форма запису на курс
            </Heading>

            <div className="flex justify-between mt-4">
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
                              Ваш Email
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
                                onChange={field.onChange}
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
                  </div>

                  <div className="flex justify-center lg:justify-start gap-x-5 -mx-3">
                    <Button
                      size="lg"
                      variant="cta"
                      type="submit"
                      disabled={isPending}
                      className="bg-primary-white text-primary-accent rounded-3xl h-50 text-xl font-semibold w-[190px] md:w-52"
                    >
                      {isPending && <Loader className="h-4 w-4 mr-2 animate-spin"/>}
                      Записатись
                    </Button>
                    <SocialButton type={SocialEnum.INSTAGRAM}/>
                    <SocialButton type={SocialEnum.LINKEDIN}/>
                  </div>
                </form>
              </Form>

              <div className="hidden lg:flex flex-col gap-y-8 mt-10">
                <div className="grid grid-cols-[310px,375px] items-center">
                  <span className="text-primary-white text-4xl">Вибраний формат:</span>
                  <span className="text-primary-blue uppercase leading-none text-[40px] text-right">{studyFormat.name}</span>
                </div>

                <div className="grid grid-cols-[310px,375px] items-center">
                  <span className="text-primary-white text-4xl">Повна ціна:</span>
                  <span className="text-primary-blue uppercase leading-none text-[40px] text-right">
                    {formatNumberWithSpaces(Number(studyFormat.price))} ₴
                  </span>
                </div>

                {
                  course.startDate
                    ? (
                      <div className="grid grid-cols-[310px,375px] items-center">
                        <span className="text-primary-white text-4xl">Старт курсу:</span>
                        <span className="text-primary-blue uppercase leading-none text-[40px] text-right">
                          {formatDate(course.startDate, 'D MMMM')}
                        </span>
                      </div>
                    )
                    : null
                }

                <span className="text-primary-white font-xl w-3/4 mt-10">
                  Заповніть форму зворотнього звʼязку, і наш менеджер звʼяжеться з вами протягом 24х годин.
                </span>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className={cn(
          'top-1/4 -translate-y-1/4 flex items-center justify-center absolute left-1/2 -translate-x-1/2 w-full',
          !isSubmitted && 'invisible',
        )}>
          <div
            className="text-primary-white font-unbounded uppercase text-3xl md:text-[48px] lg:text-[64px] leading-[1.1] text-center lg:w-3/4">
            Ваш запит прийнято в обробку
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
