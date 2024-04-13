import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="w-full bg-[#04030933] backdrop-blur-2xl py-3 px-12 flex justify-center items-center">
      <div className="max-w-screen-2xl w-full px-5 py-2 flex justify-between items-center">
        <Image
          src="/niko-it-acedemy-logo.svg"
          alt="Niko IT Acedemy Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <nav>
          <ul className="flex text-primary-white gap-x-12 py-4">
            <li>
              <Link href="/">Курси</Link>
            </li>
            <li>
              <Link href="/">Ментерство</Link>
            </li>
            <li>
              <Link href="/">Про академію</Link>
            </li>
            <li>
              <Link href="/">Блог</Link>
            </li>
            <li>
              <Link href="/">Відгуки</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
          <div className="w-full bg-primary-white h-2 rounded-3xl"/>
        </nav>
        <div>
          <Button
            size="xlg"
            variant="cta"
            className="text-primary-accent bg-primary-white"
          >
            Консультація
          </Button>
        </div>
      </div>
    </header>
  );
};
