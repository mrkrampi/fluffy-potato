import { StudentStoryInterface } from '@/interfaces/student-story.interface';

export const STUDENT_STORIES_LIST: Array<StudentStoryInterface> = [
  {
    id: 1,
    name: 'Олександр',
    position: 'Senior Project manager at SEI.',
    story: 'Після проходження Індивідуального курсу “Project Manager”, та кількох уроків з ментором, Олександр отримав роботу в компанії SEI, та працює там вже більше двох років',
    image: 'feedback/feedback1.jpeg',
    companyImage: 'feedback/company-logos/company-logo1.svg',
  },
  {
    id: 2,
    name: 'Настя',
    position: 'Senior Q.A. Engineer at NCS',
    story: 'Навчалась на курсі “Q.A. Engineer”, отримавши роботу в перші місяці пошуку на іноземному ринку Настя змогла чудово проявити себе завдяки знанням та практиці, яку отримала на курсі від Niko Academy',
    image: 'feedback/feedback2.jpeg',
    companyImage: 'feedback/company-logos/company-logo2.svg',
  },
  {
    id: 3,
    name: 'Микола',
    position: 'Junior Project manager at Accenture',
    story: 'Микола пройшов індивідуальне навчання “Q.A. Engineer” більше трьох років назад, і тепер знову наважився на зміну професії за допомогою курсу  “Project Manager”',
    image: 'feedback/feedback3.jpeg',
    companyImage: 'feedback/company-logos/company-logo3.svg',
  },
]
