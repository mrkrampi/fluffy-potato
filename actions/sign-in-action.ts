'use server';

import * as z from 'zod';
import { AuthError } from 'next-auth';

import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { getUserByEmail } from '@/db/queries';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const signInAction = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: 'Невалідні поля!',
    };
  }

  const { email, password } = validatedFields.data;

  const exisingUser = await getUserByEmail(email);

  if (!exisingUser?.email || !exisingUser?.password) {
    return {
      error: 'Email не існує!',
    };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            error: 'Невалідні поля!',
          };
        default:
          return {
            error: 'Щось пішло не так!',
          };
      }
    }

    throw error;
  }
}
