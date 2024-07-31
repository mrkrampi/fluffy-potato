import {
  timestamp,
  pgTable,
  text,
  integer,
  boolean,
  primaryKey,
  json,
  numeric
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import type { AdapterAccount } from 'next-auth/adapters';

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  password: text('password').notNull(),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

export const posts = pgTable('posts', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  content: text('content'),
  htmlContent: text('html_content'),
  authorId: text('author_id').notNull(),
  fakeAuthorId: text('fake_author_id'),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  metadata: text('metadata'),
  coverImageUrl: text('cover_image_url'),
  isPublished: boolean('is_published').notNull().default(false),
  creationDate: timestamp('creation_date').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
  timeToRead: text('time_to_read').notNull(),
  publishDate: timestamp('publish_date').notNull().defaultNow(),
  microdata: text('microdata'),
});

export const fakeAuthors = pgTable('fake_authors', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  position: text('position').notNull(),
  imageUrl: text('image_url').notNull(),
  creationDate: timestamp('creation_date').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
});

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
  fakeAuthor: one(fakeAuthors, {
    fields: [posts.fakeAuthorId],
    references: [fakeAuthors.id],
  }),
}));

export const courses = pgTable('courses', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  level: text('level').notNull(),
  duration: text('duration').notNull(),
  countOfModules: integer('count_of_modules').notNull(),
  previewImageUrl: text('preview_image_url').notNull(),
  overview: text('overview').notNull().array(),
  goals: text('goals').notNull().array(),
  overviewImageUrl: text('overview_image_url').notNull(),
  courseDescription: text('course_description').notNull(),
  courseTitle: text('course_title').notNull(),
  microdata: text('microdata'),
  startDate: timestamp('start_date'),
  courseProgramDescription: text('course_program_description').notNull(),
  courseProgram: json('course_program').notNull().array(),
  creationDate: timestamp('creation_date').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
  overviewImageCover: boolean('overview_image_cover').notNull().default(true),
});

export const allowedEmails = pgTable('allowed_emails', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: text('email').notNull().unique(),
  creationDate: timestamp('creation_date').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
});

export const feedbacks = pgTable('feedbacks', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  feedback: text('feedback').notNull(),
  imageUrl: text('image_url').notNull(),
  imageAlt: text('image_alt').notNull(),
  rating: integer('rating').notNull().default(5),
  creationDate: timestamp('creation_date').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
});

export const faqs = pgTable('faqs', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  question: text('question').notNull(),
  answer: text('answer').notNull(),
  creationDate: timestamp('creation_date').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
  categoryId: text('category_id').references(() => faqCategory.id, { onDelete: 'cascade' }),
});

export const faqCategory = pgTable('faq_category', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull().unique(),
});

export const faqRelations = relations(faqs, ({ one }) => ({
  category: one(faqCategory, {
    fields: [faqs.categoryId],
    references: [faqCategory.id],
  }),
}));

export const studyFormats = pgTable('study_formats', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  items: text('items').notNull().array(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  creationDate: timestamp('creation_date').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()),
});
