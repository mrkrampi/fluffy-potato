'use server';

import * as z from 'zod';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { CourseSchema } from '@/schemas';
import { getCourseBySlug } from '@/db/course-queries';
import { courses, courseToStudyFormats } from '@/db/schema';

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
    studyFormats,
  } = validatedFields.data;

  const course = await getCourseBySlug(slug);

  if (course) {
    throw new Error('Курс з таким слагом вже існує');
  }

  const [data] = await db.insert(courses).values({
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
    startDate: startDate ?? new Date(),
    courseProgramDescription,
  })
    .returning();

  const insertStudyPlans = studyFormats.map((studyFormat) => {
    return db.insert(courseToStudyFormats).values({
      courseId: data.id,
      studyFormatId: studyFormat,
    })
  });

  await Promise.all(insertStudyPlans);

  revalidatePath('/admin/courses');
  revalidatePath('/');
  revalidatePath('/courses');

  return {
    success: 'Курс створено',
  };
}
