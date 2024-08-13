import { courses, courseToStudyFormats, faqCategory, faqs, feedbacks, studyFormats } from '@/db/schema';

export type IFaq = typeof faqs.$inferSelect & { category: IFaqCategory | null };

export type IFaqCategory = typeof faqCategory.$inferSelect;

export type IFeedback = typeof feedbacks.$inferSelect;

export type ICourseToStudyFormat = typeof courseToStudyFormats.$inferSelect;

export type ICourse = typeof courses.$inferSelect & { courseToStudyFormats?: Array<ICourseToStudyFormat> };

export type IStudyFormat = typeof studyFormats.$inferSelect;
