import * as z from 'zod';

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    return !(data.password && !data.newPassword);

  }, {
    message: 'Новий пароль обовʼязкове поле!',
    path: ['newPassword'],
  })
  .refine((data) => {
    return !(data.newPassword && !data.password);

  }, {
    message: 'Пароль обовʼязкове поле!',
    path: ['newPassword'],
  });

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email обовʼязкове поле',
  }),
  password: z.string().min(1, {
    message: 'Пароль обовʼязкове поле',
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email обовʼязкове поле',
  }),
  password: z.string().min(6, {
    message: 'Мінімум 6 символів',
  }),
  name: z.string().min(1, {
    message: 'Імʼя обовʼязкове поле',
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email обовʼязкове поле',
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Мінімум 6 символів',
  }),
});

export const CreatePostSchema = z.object({
  title: z.string().min(1, { message: 'Обовʼязкове поле' }).min(1),
  slug: z.string().min(1, { message: 'Обовʼязкове поле' }).regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, { message: 'Невалідне значення' }),
});

export const UpdatePostSchema = z.object({
  title: z.string(),
  metadata: z.string(),
  slug: z.string().min(1, { message: 'Обовʼязкове поле' }).regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, { message: 'Невалідне значення' }),
  timeToRead: z.string(),
  fakeAuthorId: z.optional(z.string()),
  publishDate: z.date(),
  microdata: z.optional(z.string()),
});

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

export const ContactFormSchema = z.object({
  name: z.string({ message: 'Обовʼязкове поле' }),
  email: z.string({ message: 'Обовʼязкове поле' }).email({ message: 'Невалідний email адрес' }),
  phone: z.string().regex(phoneRegex, 'Невалідний номер телефону'),
  request: z.string({ message: 'Обовʼязкове поле' }),
});

export const CourseRegisterFormSchema = z.object({
  name: z.string().min(1,{ message: 'Обовʼязкове поле' }),
  email: z.string().min(1,{ message: 'Обовʼязкове поле' }).email({ message: 'Невалідний email адрес' }),
  phone: z.string().min(1,{ message: 'Обовʼязкове поле' }).regex(phoneRegex, 'Невалідний номер телефону'),
});

export const UpsertAuthor = z.object({
  id: z.optional(z.string()),
  name: z.string({ message: 'Імʼя обовʼязкове.' }),
  position: z.string({ message: 'Підпис обовʼязковий' }),
  image: z.any({ message: 'Зображення обовʼязкове.' }),
});

export const UpdateUserSchema = z.object({
  name: z.string({ message: 'Імʼя обовʼзякове' }),
});

export const CreateAllowedEmail = z.object({
  email: z.string().email({ message: 'Невалідна адреса' }),
});

export const CourseSchema = z.object({
  slug: z.string().min(1, { message: 'Обовʼязкове поле' }).regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, { message: 'Невалідне значення' }),
  name: z.string().min(1, { message: 'Обовʼязкове поле' }),
  level: z.string().min(1, { message: 'Обовʼязкове поле' }),
  duration: z.string().min(1, { message: 'Обовʼязкове поле' }),
  countOfModules: z.string({ message: 'Поле обовʼязкове' }),
  previewImage: z.any({ message: 'Зображення обовʼязкове.' }),
  overview: z.string().min(1, { message: 'Обовʼязкове поле' }).array(),
  goals: z.string().min(1, { message: 'Обовʼязкове поле' }).array(),
  overviewImage: z.any({ message: 'Зображення обовʼязкове.' }),
  courseDescription: z.string().min(1, { message: 'Обовʼязкове поле' }),
  courseTitle: z.string().min(1, { message: 'Обовʼязкове поле' }),
  microdata: z.optional(z.string()),
  startDate: z.optional(z.date({ message: 'Поле обовʼязкове' })),
  courseProgramDescription: z.string().min(1, { message: 'Обовʼязкове поле' }),
  courseProgram: z.object({
    id: z.optional(z.string()),
    title: z.string().min(1, { message: 'Обовʼязкове поле' }),
    objective: z.string().min(1, { message: 'Обовʼязкове поле' }),
    lessons: z.string().min(1, { message: 'Обовʼязкове поле' }).array(),
  })
    .array(),
});

export const UpsertFeedback = z.object({
  id: z.optional(z.string()),
  name: z.string().min(1, { message: 'Імʼя обовʼязкове' }),
  feedback: z.string().min(1, { message: 'Відгук обовʼязковий' }),
  imageUrl: z.any({ message: 'Зображення обовʼязкове' }),
  imageAlt: z.string().min(1,{ message: 'Підпис до зображення обовʼязковий' }),
});

export const UpsertFaq = z.object({
  id: z.optional(z.string()),
  question: z.string().min(1, { message: 'Запитання обовʼязкове' }),
  answer: z.string().min(1, { message: 'Відповідь обовʼязкова' }),
});

export const UpsertStudyFormat = z.object({
  id: z.optional(z.string()),
  name: z.string().min(1, { message: 'Імʼя обовʼязкове' }),
  items: z.string().min(1, { message: 'Обовʼязкове поле' }).array(),
  price: z.string()
    .min(1, { message: 'Обовʼязкове поле' })
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Очікувалось число"
  }),
});
