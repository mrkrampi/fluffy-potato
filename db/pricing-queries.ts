import { cache } from 'react';
import { eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { studyFormats } from '@/db/schema';

export const getStudyFormats = cache(() => db.query.studyFormats.findMany({
  orderBy: (pricing, { asc }) => [asc(pricing.creationDate)],
}));

export const getStudyFormatById = cache((id: typeof studyFormats.$inferSelect['id']) => db.query.studyFormats.findFirst({
  where: eq(studyFormats.id, id),
}));
