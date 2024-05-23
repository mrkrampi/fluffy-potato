'use server';

import * as z from 'zod';

import db from '@/db/drizzle';
import { auth } from '@/auth';
import { eq } from 'drizzle-orm';
import { users } from '@/db/schema';
import { UpdateUserSchema } from '@/schemas';
import { revalidatePath } from 'next/cache';

export const updateUser = async (values: z.infer<typeof UpdateUserSchema>) => {
  const session = await auth();

  if (!session?.user) {
    throw new Error('Неавторизований');
  }

  const validatedFields = UpdateUserSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Невалідні поля');
  }

  const { name } = validatedFields.data;

  await db.update(users).set({
    name,
  }).where(eq(users.id, session.user.id!));

  revalidatePath('/admin/settings');

  return {
    success: 'Дані оновлено',
  };
};
