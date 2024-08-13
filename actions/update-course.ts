'use server';

import * as z from 'zod';
import { eq, sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { courses, courseToStudyFormats } from '@/db/schema';
import { getCourseById } from '@/db/course-queries';
import { CourseSchema } from '@/schemas';

export const updateCourseData = async (id: string, values: z.infer<typeof CourseSchema>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = CourseSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const courseFromDb = await getCourseById(id);

  if (!courseFromDb) {
    throw new Error('Такий курс не існує');
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

  await db.update(courses)
    .set({
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
    })
    .where(eq(courses.id, id));

  await db
    .delete(courseToStudyFormats)
    .where(eq(courseToStudyFormats.courseId, id));

  const insertStudyPlans = studyFormats.map((studyFormat) => {
    return db.insert(courseToStudyFormats).values({
      courseId: id,
      studyFormatId: studyFormat,
    })
  });

  await Promise.all(insertStudyPlans);

  revalidatePath('/');
  revalidatePath('/courses');
  revalidatePath(`/courses/${slug}`, 'page');
  revalidatePath(`/admin/courses`);
  revalidatePath(`/admin/courses/${id}`);

  return {
    success: 'Курс оновлено',
  };
}
