'use client';

import Link from 'next/link';
import { useToggle } from 'usehooks-ts';
import { usePathname } from 'next/navigation';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { MenuLinkInterface } from '@/interfaces/menu-link.interface';
import { MENU_LINKS_LIST } from '@/consts/menu-links';
import { useEffect } from 'react';

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
          "relative before:absolute before:h-2 before:-bottom-6 before:w-full before:bg-primary-accent before:rounded-3xl before:opacity-0 xl:hover:before:opacity-100 before:transition before:duration-200 before:ease-linear",
          isActiveLink && "xl:before:opacity-100"
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
      className="w-full bg-[#04030933] backdrop-blur-2xl py-3 px-6 lg:px-12 flex justify-center items-center fixed top-0 z-40 right-0 left-0">
      <div className="max-w-screen-2xl w-full px-5 py-2 grid lg:flex justify-between items-center header-areas">
        <Link href="/" aria-label="Головна сторінка" className="area-logo relative w-24 h-10 md:w-36 md:h-16">
          <Logo/>
        </Link>
        <button
          className="block md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg items-center justify-center area-hamburger"
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
          'hidden xl:block w-full md:w-auto text-center lg:text-left area-navigation',
          isMenuOpen && 'block',
        )}>
          <ul className="flex flex-col xl:flex-row text-primary-white gap-y-3 gap-x-12 py-4">
            {MENU_LINKS_LIST.map(renderMenuLink)}
          </ul>
          <div className="hidden xl:block w-full bg-primary-white h-2 rounded-3xl"/>
        </nav>
        <div className="hidden md:flex area-consultation gap-x-6">
          <button
            className="xl:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center area-hamburger"
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
          <Button
            size="xlg"
            variant="cta"
            className="hidden md:flex text-primary-accent bg-primary-white"
          >
            Консультація
          </Button>
        </div>
      </div>
    </header>
  );
};
