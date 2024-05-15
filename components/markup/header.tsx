'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useToggle } from 'usehooks-ts';
import { usePathname } from 'next/navigation';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/drawings/logo';
import { MENU_LINKS_LIST } from '@/consts/menu-links';
import { MenuLinkInterface } from '@/interfaces/menu-link.interface';
import { ConsultationModal } from '@/components/modals/consultation-modal';

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
  }, [pathname]);

  const renderMenuLink = ({ link, title }: MenuLinkInterface) => {
    const isActiveLink = pathname.includes(link);

    return (
      <li
        key={`${link}-menu-link`}
        className={cn(
          "relative before:absolute lg:before:h-2 before:w-2 before:-bottom-6 lg:before:w-full before:-left-8 before:top-0 lg:before:left-0 lg:before:top-[unset] before:h-full before:bg-primary-accent before:rounded-3xl before:opacity-0 xl:hover:before:opacity-100 before:transition before:duration-200 before:ease-linear uppercase lg:normal-case py-4 lg:py-0",
          isActiveLink && "before:opacity-100"
        )}>
        <Button
          asChild
          variant="link"
          className="p-0 text-primary-white h-auto text-base hover:no-underline"
        >
          <Link href={`/${link}`}>{title}</Link>
        </Button>
      </li>
    );
  };

  return (
    <header
      className={cn(
        "w-full bg-[#04030933] backdrop-blur-2xl py-3 px-6 lg:px-12 flex justify-center fixed top-0 z-40 right-0 left-0 max-h-20 md:max-h-[104px] transition-all ease-in-out duration-200 overflow-hidden",
        isMenuOpen && "max-h-[550px] md:max-h-[504px]"
      )}>
      <div className="max-w-screen-2xl w-full px-5 py-2 grid lg:flex justify-between items-center header-areas">
        <Link href="/" aria-label="Головна сторінка" className="area-logo relative w-24 h-10 md:w-36 md:h-16">
          <Logo/>
        </Link>
        <button
          className="lg:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg items-center area-hamburger flex justify-end"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Відкрити меню</span>
          <HamburgerMenuIcon className={cn(
            'font-bold h-6 w-6 text-primary-white',
            isMenuOpen && 'hidden',
          )}/>
          <Cross1Icon className={cn(
            'font-bold h-6 w-6 text-primary-white',
            !isMenuOpen && 'hidden',
          )}/>
        </button>
        <nav className={cn(
          'flex xl:block w-full md:w-auto lg:text-left area-navigation flex-col h-full gap-6 pt-6 lg:pt-0',
          // isMenuOpen && 'flex',
        )}>
          <div className="flex gap-6">
            <div className="lg:w-full lg:hidden bg-primary-white lg:h-2 rounded-3xl h-full w-2"/>
            <ul className="flex flex-col lg:flex-row text-primary-white gap-y-2 gap-x-12 lg:py-4">
              {MENU_LINKS_LIST.map(renderMenuLink)}
            </ul>
          </div>

          <div className="hidden xl:block w-full bg-primary-white h-2 rounded-3xl"/>

          <div className="md:hidden mx-auto">
            <ConsultationModal/>
          </div>
        </nav>
        <div className="hidden md:flex area-consultation gap-x-6">
        <button
            className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center area-hamburger"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Відкрити меню</span>
            <HamburgerMenuIcon className={cn(
              'font-bold h-6 w-6 text-primary-white',
              isMenuOpen && 'hidden',
            )}/>
            <Cross1Icon className={cn(
              'font-bold h-6 w-6 text-primary-white',
              !isMenuOpen && 'hidden',
            )}/>
          </button>

          <div className="hidden md:flex">
            <ConsultationModal/>
          </div>
        </div>
      </div>
    </header>
  );
};
