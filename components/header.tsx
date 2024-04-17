'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery, useToggle } from 'usehooks-ts';
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import logo from '../public/logo.svg';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <header
      className="w-full bg-[#04030933] backdrop-blur-2xl py-3 px-6 lg:px-12 flex justify-center items-center fixed top-0 z-40 right-0 left-0">
      <div className="max-w-screen-2xl w-full px-5 py-2 grid lg:flex justify-between items-center header-areas">
        <Link href="/" className="area-logo relative w-24 h-10 md:w-36 md:h-16">
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
            <li>
              <Button
                asChild
                variant="link"
                className="p-0 text-primary-white h-auto text-base"
              >
                <Link href="/">Курси</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="link"
                className="p-0 text-primary-white h-auto text-base"
              >
                <Link href="/">Менторство</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="link"
                className="p-0 text-primary-white h-auto text-base"
              >
                <Link href="/">Про академію</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="link"
                className="p-0 text-primary-white h-auto text-base"
              >
                <Link href="/">Блог</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="link"
                className="p-0 text-primary-white h-auto text-base"
              >
                <Link href="/">Відгуки</Link>
              </Button>
            </li>
            <li>
              <Button
                asChild
                variant="link"
                className="p-0 text-primary-white h-auto text-base"
              >
                <Link href="/">FAQ</Link>
              </Button>
            </li>
          </ul>
          <div className="hidden lg:block w-full bg-primary-white h-2 rounded-3xl"/>
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
            className="hidden md:block text-primary-accent bg-primary-white"
          >
            Консультація
          </Button>
        </div>
      </div>
    </header>
  );
};
