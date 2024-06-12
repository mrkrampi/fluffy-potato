'use server';

import * as z from 'zod';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { feedbacks } from '@/db/schema';
import { UpsertFeedback } from '@/schemas';
import { getFeedbackById } from '@/db/feedbacks-queries';

export const upsertFeedback = async (values: z.infer<typeof UpsertFeedback>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = UpsertFeedback.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { id, name, feedback, imageUrl, imageAlt } = validatedFields.data;

  if (id) {
    const feedbackFromDb = await getFeedbackById(id);

    if (!feedbackFromDb) {
      throw new Error('Такого відгук не існує');
    }

    await db.update(feedbacks).set({
      name,
      feedback,
      imageUrl,
      imageAlt,
    }).where(eq(feedbacks.id, id));

    revalidatePath('/admin/feedbacks');
    revalidatePath('/');
    revalidatePath('/courses');

    return {
      success: 'Відгук оновлений',
    };
  }

  await db.insert(feedbacks).values({
    name,
    feedback,
    imageUrl,
    imageAlt,
  });

  revalidatePath('/admin/feedbacks');
  revalidatePath('/');
  revalidatePath('/about-us', 'page');

  return {
    success: 'Відгук створений',
  };
};
