import * as z from 'zod';

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6)),
})
  .refine((data) => {
    if (data.password && !data.newPassword) {
      return false;
    }

    return true;
  }, {
    message: 'Новий пароль обовʼязкове поле!',
    path: ['newPassword'],
  })
  .refine((data) => {
    if (data.newPassword && !data.password) {
      return false;
    }

    return true;
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
  title: z.string({ message: 'Обовʼязкове поле' }),
  slug: z.string({ message: 'Обовʼязкове поле' }),
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
