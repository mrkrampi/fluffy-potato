import { WhyUsInterface } from '@/interfaces/why-us.interface';

export const PERKS = [
  'Портфоліо власних робіт, що в майбутньому допомагає у працевлаштуванні',
  'Потрібні Soft-skills для роботи. Такі як тайм-менеджмент, цілеспрямованість, уміння працювати в команді',
  'Сертифікат та рекомендацію для роботодавця від Академії. Підтримка навіть після завершення навчання',
];

export const RESULT_PROGRESS = [
  {
    progress: 40,
    text: 'Теорії',
  },
  {
    progress: 60,
    text: 'Практики',
  },
  {
    progress: 100,
    text: 'Іновацій',
  },
  {
    progress: 100,
    text: 'Результат',
  },
];

export const WHY_US_LIST: Array<WhyUsInterface> = [
  {
    count: '640',
    title: 'ВИПУСКНИКІВ',
    description: 'Вже пройшли навчання та отримали професію мрії'
  },
  {
    count: '90',
    title: 'Учнів',
    description: 'Які успішно закінчили навчання, вже працюють в сфері'
  },
  {
    count: '6+',
    title: 'РОКІВ РОБОТИ',
    description: 'Викладача у сфері IT'
  },
  {
    count: '50+',
    title: 'ГОДИН НАВЧАННЯ',
    description: 'Не тільки актуальної теорії, але і 60% практики'
  },
]
