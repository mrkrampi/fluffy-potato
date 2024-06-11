'use server';

import * as z from 'zod';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { courses } from '@/db/schema';
import { CourseSchema } from '@/schemas';
import { getCourseBySlug } from '@/db/course-queries';

export const createCourse = async (values: z.infer<typeof CourseSchema>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = CourseSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const {
    courseProgram,
    courseDescription,
    courseTitle,
    overview,
    goals,
    overviewImage,
    microdata,
    slug,
    name,
    previewImage,
    countOfModules,
    duration,
    level,
    startDate,
    courseProgramDescription,
  } = validatedFields.data;

  const course = await getCourseBySlug(slug);

  if (course) {
    throw new Error('Курс з таким слагом вже існує');
  }

  await db.insert(courses).values({
    courseProgram,
    courseDescription,
    courseTitle,
    overview,
    goals,
    overviewImageUrl: overviewImage,
    microdata,
    slug,
    name,
    previewImageUrl: previewImage,
    countOfModules: Number(countOfModules),
    duration,
    level,
    startDate,
    courseProgramDescription,
  });

  revalidatePath('/admin/courses');
  revalidatePath('/');
  revalidatePath('/courses');

  return {
    success: 'Курс створено',
  };
}
