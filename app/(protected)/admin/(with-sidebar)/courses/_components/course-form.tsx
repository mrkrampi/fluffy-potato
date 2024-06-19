'use client';

import * as z from 'zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { Info, Loader, Trash } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import { courses } from '@/db/schema';
import { CourseSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { useEdgeStore } from '@/lib/edgestore';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '@/components/date-picker';
import { createCourse } from '@/actions/create-course';
import { SingleImageDropzone } from '@/components/single-image-dropzone';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { updateCourseData } from '@/actions/update-course';

type Props = {
  course?: typeof courses.$inferSelect;
}

export const CourseForm = ({ course }: Readonly<Props>) => {
  console.log(courses);
  const router = useRouter();
  const { edgestore } = useEdgeStore();
  const [isPending, startTransition] = useTransition();

  const [previewImageFile, setPreviewImageFile] = useState<File | string | undefined>(course?.previewImageUrl);
  const [overviewImageFile, setOverviewImageFile] = useState<File | string | undefined>(course?.overviewImageUrl);

  const form = useForm<z.infer<typeof CourseSchema>>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      name: course?.name,
      level: course?.level,
      duration: course?.duration,
      countOfModules: course?.countOfModules?.toString(),
      slug: course?.slug,
      courseTitle: course?.courseTitle,
      courseDescription: course?.courseDescription,
      microdata: course?.microdata ?? '',
      previewImage: course?.previewImageUrl,
      overviewImage: course?.previewImageUrl,
      overview: course?.overview ?? [],
      goals: course?.goals ?? [],
      courseProgram: [],
      courseProgramDescription: course?.courseProgramDescription,
      startDate: course?.startDate,
    },
  });

  useEffect(() => {
    form.setValue('name', course?.name || '');
    form.setValue('level', course?.level || '');
      form.setValue('duration', course?.duration || '');
      form.setValue('countOfModules', course?.countOfModules?.toString() || '');
      form.setValue('slug', course?.slug || '');
      form.setValue('courseTitle', course?.courseTitle || '');
      form.setValue('courseDescription', course?.courseDescription || '');
      form.setValue('microdata', course?.microdata ?? '');
      form.setValue('previewImage', course?.previewImageUrl || '');
      form.setValue('overviewImage', course?.previewImageUrl || '');
      form.setValue('overview', course?.overview ?? []);
      form.setValue('goals', course?.goals ?? []);
      // form.setValue('courseProgram', course?.courseProgram ? course.courseProgram as any : []);
      form.setValue('courseProgramDescription', course?.courseProgramDescription || '');
      form.setValue('startDate', course?.startDate || undefined);
  }, [course]);

  const { control } = form;

  const { fields: overviewFields, append: appendOverview, remove: removeOverview } = useFieldArray({
    control,
    name: 'overview',
  });

  const { fields: goalsFields, append: appendGoals, remove: removeGoals } = useFieldArray({
    control,
    name: 'goals',
  });

  const {
    fields: courseProgramFields,
    append: appendCourseProgram,
    remove: removeCourseProgram,
    update: updateCourseProgram,
  } = useFieldArray({
    control,
    name: 'courseProgram',
  });

  const onSubmit = (values: z.infer<typeof CourseSchema>) => {
    if (course) {
      update(values)
    } else {
      create(values);
    }
  };

  const transformUrlToLink = (text: string): string => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;

    return text.replace(urlPattern, '<a href="$1">$1</a>');
  }

  const create = (values: z.infer<typeof CourseSchema>) => {
    startTransition(async () => {
      try {
        const previewImage = await uploadPreviewImage();
        const overviewImage = await uploadOverviewImage();

        const response = await createCourse({
          ...values,
          previewImage,
          overviewImage,
          overview: values.overview.map((o: string) => transformUrlToLink(o)),
        });

        if (response.success) {
          toast.success(response.success);
        }

        router.push(`/admin/courses`);
      } catch (error: any) {
        form.reset();
      }
    });
  }

  const update = (values: z.infer<typeof CourseSchema>) => {
    if (!course) {
      return;
    }

    startTransition(async () => {
      try {
        const previewImage = await uploadPreviewImage();
        const overviewImage = await uploadOverviewImage();

        const response = await updateCourseData(course.id, {
          ...values,
          previewImage,
          overviewImage,
          overview: values.overview.map((o: string) => transformUrlToLink(o)),
        });

        if (response.success) {
          toast.success(response.success);
        }

        router.push(`/admin/courses`);
      } catch (error: any) {
        form.reset();
      }
    });
  }

  const onPreviewImageChange = (file?: File) => {
    setPreviewImageFile(file);
    form.setValue('previewImage', file);
  };

  const onOverviewImageChange = (file?: File) => {
    setOverviewImageFile(file);
    form.setValue('overviewImage', file);
  };

  const handleAddLesson = (programIndex: number) => {
    const programField = courseProgramFields[programIndex];
    programField.lessons.push('');
    updateCourseProgram(programIndex, programField);
  };

  const uploadOverviewImage = async (): Promise<string> => {
    if (overviewImageFile === course?.overviewImageUrl) {
      return course?.overviewImageUrl ?? '';
    }

    const uploadImageResponse = await edgestore.publicFiles.upload({
      file: overviewImageFile as File,
      options: {
        replaceTargetUrl: course?.overviewImageUrl,
      },
    });

    return uploadImageResponse.url;
  };

  const uploadPreviewImage = async (): Promise<string> => {
    if (previewImageFile === course?.previewImageUrl) {
      return course?.previewImageUrl ?? '';
    }

    const uploadImageResponse = await edgestore.publicFiles.upload({
      file: previewImageFile as File,
      options: {
        replaceTargetUrl: course?.previewImageUrl,
      },
    });

    return uploadImageResponse.url;
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Назва</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Project Manager..."
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="slug"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="project-manager"
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="courseTitle"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Тайтл

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 ml-2"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Тайтл в вкладці браузера</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Project manager..."
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <FormField
                name="level"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Рівень</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Початківець..."
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="duration"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Тривалість курсу</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="3 місяці..."
                        type="text"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="countOfModules"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Кількість модулів</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="3"
                        type="number"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="microdata"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Мікророзмітка</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Додайте мікророзмітку"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="courseDescription"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Metadata description

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 ml-2"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Опис курсу для metadata</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Опис"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                name="previewImage"
                control={form.control}
                render={() => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      Preview

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 ml-2"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Зображення головній сторінці в секції курси</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <SingleImageDropzone
                        className="w-full outline-none h-40"
                        onChange={onPreviewImageChange}
                        disabled={isPending}
                        value={previewImageFile}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                name="overviewImage"
                control={form.control}
                render={() => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      overviewImage

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 ml-2"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Зображення на сторінці курсу</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <SingleImageDropzone
                        className="w-full outline-none h-40"
                        onChange={onOverviewImageChange}
                        disabled={isPending}
                        value={overviewImageFile}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="startDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Дата початку курсу</FormLabel>
                  <FormControl>
                    <DatePicker
                      selected={field.value}
                      onSelect={field.onChange}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <FormLabel>Overview</FormLabel>
              <ul className="space-y-4">
                {overviewFields.map((item, index) => (
                  <li className="flex items-center" key={item.id}>
                    <Controller
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder=""
                          type="text"
                          disabled={isPending}
                        />
                      )}
                      name={`overview.${index}`}
                      control={control}
                    />

                    <Button className="ml-2" variant="ghost" onClick={() => removeOverview(index)}>
                      <Trash className="w-4 h-4 text-rose-400"/>
                    </Button>
                  </li>
                ))}
                <Button type="button" onClick={() => appendOverview('')}>
                  Додати overview
                </Button>
              </ul>
            </div>

            <div className="space-y-2">
              <FormLabel>Цілі</FormLabel>
              <ul className="space-y-4">
                {goalsFields.map((item, index) => (
                  <li className="flex items-center" key={item.id}>
                    <Controller
                      render={({ field }) => (
                        <Input
                          {...field}
                          placeholder=""
                          type="text"
                          disabled={isPending}
                        />
                      )}
                      name={`goals.${index}`}
                      control={control}
                    />

                    <Button className="ml-2" variant="ghost" onClick={() => removeGoals(index)}>
                      <Trash className="w-4 h-4 text-rose-400"/>
                    </Button>
                  </li>
                ))}
                <Button type="button" onClick={() => appendGoals('')}>
                  Додати ціль
                </Button>
              </ul>
            </div>

            <div className="space-y-2">
              <FormField
                name="courseProgramDescription"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Опис програми курсу</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Опис"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormLabel className="flex items-center">
                Програма курсу

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 ml-2"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Будь ласка заповняйте спочатку уроки і лише в кінці тайтл і ціль</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <ul className="space-y-4">
                {courseProgramFields.map((item, index: number) => (
                  <li className="flex items-center" key={item.id}>
                    <div className="w-full space-y-2">
                      <div className="grid grid-cols-2 gap-4">
                        <Controller
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Заголовок"
                              type="text"
                              disabled={isPending}
                            />
                          )}
                          name={`courseProgram.${index}.title`}
                          control={control}
                        />

                        <Controller
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Ціль"
                              type="text"
                              disabled={isPending}
                            />
                          )}
                          name={`courseProgram.${index}.objective`}
                          control={control}
                        />
                      </div>

                      {item.lessons.map((lesson: string, lessonIndex: number) => (
                        <Controller
                          key={lessonIndex}
                          render={({ field }) => (
                            <Input
                              {...field}
                              placeholder="Назва уроку"
                              type="text"
                              disabled={isPending}
                              className="max-w-sm"
                            />
                          )}
                          name={`courseProgram.${index}.lessons.${lessonIndex}`}
                          control={control}
                        />
                      ))}

                      <Button type="button" onClick={() => handleAddLesson(index)}>
                        Додати урок
                      </Button>
                    </div>

                    <Button className="ml-2" variant="ghost" onClick={() => removeCourseProgram(index)}>
                      <Trash className="w-4 h-4 text-rose-400"/>
                    </Button>
                  </li>
                ))}
                <Button type="button" onClick={() => appendCourseProgram({ title: '', objective: '', lessons: [] })}>
                  Додати програму курсу
                </Button>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <Button disabled={isPending} onClick={form.handleSubmit(onSubmit)}>
              {isPending && <Loader className="h-4 w-4 mr-2 animate-spin"/>}
              {course ? 'Оновити' : 'Створити'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
