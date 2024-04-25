import { MenuLinkInterface } from '@/interfaces/menu-link.interface';
import { COURSES_LIST } from '@/consts/courses';

export const MENU_LINKS_LIST: Array<MenuLinkInterface> = [
  {
    title: 'Курси',
    link: `courses/${COURSES_LIST.at(0)?.slug}`,
  },
  {
    title: 'Менторство',
    link: 'mentoring',
  },
  {
    title: 'Про академію',
    link: 'about-us',
  },
  {
    title: 'Блог',
    link: 'blog',
  },
  {
    title: 'Відгуки',
    link: 'feedbacks',
  },
  {
    title: 'FAQ',
    link: 'faq',
  },
]
