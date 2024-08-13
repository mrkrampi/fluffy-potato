import { cache } from 'react';
import { eq } from 'drizzle-orm';

import db from '@/db/drizzle';
import { courses } from '@/db/schema';

export const getCourseBySlug = cache((slug: string) => {
  return db.query.courses.findFirst({
    where: eq(courses.slug, slug),
    with: {
      courseToStudyFormats: true,
    }
  });
});

export const getCourseById = cache((id: string) => {
  return db.query.courses.findFirst({
    where: eq(courses.id, id),
    with: {
      courseToStudyFormats: true,
    }
  });
});

export const getAllCourses = cache(() => {
  return db.query.courses.findMany({
    orderBy: (courses, { asc }) => [asc(courses.creationDate)],
  });
});
