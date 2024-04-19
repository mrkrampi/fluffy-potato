import { StudyFormatInterface } from '@/interfaces/study-format.interface';

export const STUDY_FORMATS_LIST: Array<StudyFormatInterface> = [
  {
    id: 1,
    name: 'Індивідуальне навчання',
    description: [
      'Розроблена під вас програма',
      'Гнучкий графік навчання',
      'Фокус на практиці',
    ],
    price: 20e3,
  },
  {
    id: 2,
    name: 'Груповий курс',
    description: [
      'Поглиблене вивчення профільних тем',
      'Групи до 20 студентів',
      'Підтримка ментора',
      'Курси англійської'
    ],
    price: 15000,
  },
  {
    id: 3,
    name: 'Власний темп Навчання',
    description: [
      'Старт навчання одразу після оплати',
      'Запис лекцій та домашні завдання',
      'Доступ до курсу на 12 місяців',
    ],
    price: 8000,
  },
];
