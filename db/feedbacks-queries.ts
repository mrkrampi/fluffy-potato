import { cache } from 'react';
import { eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { feedbacks } from '@/db/schema';

export const getFeedbacks = cache(() => db.query.feedbacks.findMany({
  orderBy: (feedbacks, { asc }) => [asc(feedbacks.creationDate)],
}));

export const getFeedbackById = cache((id: string) => db.query.feedbacks.findFirst({
  where: eq(feedbacks.id, id),
}));
