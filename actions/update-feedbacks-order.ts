'use server';

import { auth } from '@/auth';
import { ActionResult } from '@/interfaces/action-result';
import { IFeedback } from '@/interfaces/model-types';
import db from '@/db/drizzle';
import { feedbacks } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export const updateFeedbacksOrder = async (orderedFeedbacks: Array<IFeedback>): Promise<ActionResult> => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const updateRequest = orderedFeedbacks.map((feedback: IFeedback, index: number) => {
    return db.update(feedbacks)
      .set({ order: index })
      .where(eq(feedbacks.id, feedback.id));
  });

  await Promise.all(updateRequest);

  revalidatePath('/admin/feedbacks');
  revalidatePath('/');
  revalidatePath('/feedbacks');
  revalidatePath('/about-us', 'page');

  return {
    success: 'Порядок змінено',
  };
};
