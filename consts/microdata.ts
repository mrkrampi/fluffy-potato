import { Organization, WithContext, FAQPage, WebPage, Article, Person } from 'schema-dts';

export const ORGANIZATION_MICRODATA: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'NIKO IT ACADEMY',
  'email': 'niko-it-acedemy@gmail.com',
  'sameAs': [
    'https://www.facebook.com/profile.php?id=61556998809290',
    'https://www.linkedin.com/profile.php?id=61556998809290',
    'https://www.instagram.com/profile.php?id=61556998809290',
  ],
  'contactPoint': {
    '@type': 'ContactPoint',
    'name': 'Наталія Яцишинець',
  },
  'employee': {
    '@type': 'Person',
    'name': 'Наталія Яцишинець',
  },
  'url': 'https://www.nikoit-academy.com/',
};

export const FAQ_MICRODATA: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Чи можу я навчатись без досвіду в IT?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Всі наші курси орієнтовані на початківців, які раніше не мали досвіду в IT. Матеріал пояснюється легкою мовою, також у вас буде змога отримати зворотній звʼязок від куратора.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Які методи навчання ви використовуєте на своїй платформі?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'На наших курсах у навчанні використовуються інтерактивні методи, такі як: Відеоуроки; Інтерактивні лекції; Групові проєкти та віртуальні класи. Ми чудово знаємо як мотивувати студента, допомагаємо поглибити знання та опанувати нові навички.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Чи отримаю я якесь підтвердження по закінченню курсу?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'При успішному закінчені курсу, ви отримаєте цифровий сертифікат. Але у першу чергу наша мета - надати знання, що відповідають вимогам вакансій на ринку праці.',
      },
    },
    {
      '@type': 'Question',
      'name': 'Чи будуть домашні завдання при самостійному проходжені курсу?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Домашня робота – це практика, з допомогою якої закріплюються знання. Вони мають рекомендаційний характер, щоб ви напрацьовували портфоліо під час навчання, та більшість з них є обов\'язковими.',
      },
    },
  ],
};

export const ABOUT_US_WEBPAGE_MICRODATA: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'url': 'https://www.nikoit-academy.com/about-us',
  'description': 'Все про нашу онлайн платформу NIKO IT ACADEMY',
  'name': 'Все про нашу онлайн платформу NIKO IT',
  'inLanguage': 'UK',
};

export const BLOG_WEBPAGE_MICRODATA: WithContext<WebPage> = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  'url': 'https://www.nikoit-academy.com/blog',
  'description': 'Відповіді на питання про світ IT та сучасний IT ринок та його тенденції, Ви можете знайти в нашому блозі.',
  'name': 'Блог NIKO IT ACADEMY',
  'inLanguage': 'uk-ua',
};

export const BLOG_ARTICLES_MICRODATA: WithContext<Article> = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': 'Блог NIKO IT ACADEMY',
  'author': {
    '@type': 'Organization',
    'url': 'https://www.nikoit-academy.com/blog',
    'name': 'NIKO IT ACADEMY',
    'inLanguage': 'uk-ua',
    'sameAs': [
      'https://www.facebook.com/profile.php?id=61556998809290',
      'https://www.linkedin.com/profile.php?id=61556998809290',
      'https://www.instagram.com/it_courses_niko',
    ],
  },
} as WithContext<Article>;







