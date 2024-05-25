'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

import { auth } from '@/auth';
import db from '@/db/drizzle';
import { allowedEmails } from '@/db/schema';

export const deleteAllowedEmail = async (email: string) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  if (!email) {
    throw new Error('Неможливо видалити');
  }

  await db.delete(allowedEmails)
    .where(eq(allowedEmails.email, email));

  revalidatePath('/admin/settings/allowed-emails');

  return {
    success: 'Email видалено',
  };
};
