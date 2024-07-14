'use server';

import { auth } from '@/auth';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import db from '@/db/drizzle';
import { feedbacks } from '@/db/schema';
import { getFeedbackById } from '@/db/feedbacks-queries';

export const deleteFeedback = async (id: typeof feedbacks.$inferSelect['id']) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const feedbackFromDb = await getFeedbackById(id);

  if (!feedbackFromDb) {
    throw new Error('Такий Відгук не існує');
  }

  await db.delete(feedbacks).where(eq(feedbacks.id, id));

  revalidatePath('/admin/feedbacks');
  revalidatePath('/');
  revalidatePath('/feedbacks');
  revalidatePath('/about-us');

  return {
    success: 'Видалення успішне',
  };
};
