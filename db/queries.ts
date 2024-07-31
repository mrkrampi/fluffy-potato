import { eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { users } from '@/db/schema';
import { unstable_cache } from 'next/cache';

export const getUserByEmail = async (email: string) => {
  console.log('getUserByEmail');
  return db.query.users.findFirst({
    where: eq(users.email, email),
  });
};

export const getUserById = unstable_cache((id: string) => {
  return db.query.users.findFirst({
    where: eq(users.id, id),
  });
}, ['currentUser']);
