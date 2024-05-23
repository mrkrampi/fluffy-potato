import { cache } from 'react';
import { and, eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { fakeAuthors } from '@/db/schema';

export const getAllAuthors = cache(() => {
  return db.query.fakeAuthors.findMany();
});

export const getAuthorById = cache((id: string) => {
  return db.query.fakeAuthors.findFirst({
    where: eq(fakeAuthors.id, id),
  });
});
