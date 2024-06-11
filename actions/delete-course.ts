'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { courses } from '@/db/schema';
import { getCourseById } from '@/db/course-queries';

export const deleteCourse = async (id: string) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const course = await getCourseById(id);

  if (!course) {
    throw new Error('Такий курс не існує');
  }

  await db.delete(courses).where(eq(courses.id, id));

  revalidatePath('/admin/courses');
  revalidatePath('/');
  revalidatePath(`/courses/${course.slug}`);

  return {
    success: 'Видалення успішне',
  };
};
