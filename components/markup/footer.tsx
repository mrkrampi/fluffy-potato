import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { COURSES_LIST } from '@/consts/courses';
import { SocialEnum } from '@/enums/social.enum';
import { Logo } from '@/components/drawings/logo';
import { SocialButton } from '@/components/social-button';

export const Footer = () => {
  const firstCourseSlug = COURSES_LIST.at(0)?.slug;

  return (
    <footer className="w-full h-full bg-primary-black">
      <div className="border-l-primary-white pt-16 md:pt-0 border-b-2">
        <div className="flex-col md:flex-row w-full py-2 px-2 md:px-8 xl:py-20 xl:px-24 flex justify-between items-center">
          <div className="flex justify-between items-end w-full md:w-auto">
            <div>
              <div className="relative w-24 h-10 md:w-36 md:h-14">
                <Logo/>
              </div>
              <div className="flex flex-col mt-8">
                <div className="text-sm md:text-base text-primary-gray">
                  Email
                </div>
                <a className="text-primary-white md:text-xl mt-2" href="mailto:niko-it-acedemy@gmail.com">
                  nikoitacademy@gmail.com
                </a>
              </div>
            </div>
            <div className="flex md:hidden gap-x-4 md:gap-x-6">
              <SocialButton type={SocialEnum.FACEBOOK}/>
              <SocialButton type={SocialEnum.LINKEDIN}/>
              <SocialButton type={SocialEnum.INSTAGRAM}/>
            </div>
          </div>
          <div className="hidden xl:flex gap-x-10">
            <div className="relative w-24 h-32">
              <Image
                src="/payment-logos/visa.svg"
                alt="Visa"
                fill
              />
            </div>
            <div className="relative w-48 h-32">
              <Image
                src="/payment-logos/mastercard.svg"
                alt="Visa"
                fill
              />
            </div>
            <div className="relative w-40 h-32">
              <Image
                src="/payment-logos/way4pay.svg"
                alt="Visa"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col my-20 md:my-0">
            <div className="text-primary-white md:max-w-80 text-xl md:text-2xl text-center font-unbounded leading-tight">
              Розпочни свою<br/>карʼєру в It
            </div>
            <div className="mt-8 md:mt-12 flex justify-between w-full gap-x-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-accent rounded-3xl px-6 py-3 min-w-36 xl:min-w-fit hover:bg-primary-white hover:text-primary-accent"
              >
                <Link href={`/courses/${firstCourseSlug}`}>Курси</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-3xl text-primary-white bg-transparent border-2 px-6 py-3 min-w-36 xl:min-w-fit"
              >
                <Link href="/about-us">Про нас</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full mb-6 md:mb-0 py-2 px-2 md:px-8 flex xl:hidden justify-between items-center">
          <div className="flex xl:hidden gap-x-4 md:gap-x-10 w-full justify-between md:justify-start">
            <div className="relative h-6 w-16 md:w-16 md:h-24">
              <Image
                src="/payment-logos/visa.svg"
                alt="Visa"
                fill
              />
            </div>
            <div className="relative h-6 w-32 md:w-32 md:h-24">
              <Image
                src="/payment-logos/mastercard.svg"
                alt="Visa"
                fill
              />
            </div>
            <div className="relative w-28 h-6 md:w-32 md:h-24">
              <Image
                src="/payment-logos/way4pay.svg"
                alt="Visa"
                fill
              />
            </div>
          </div>
          <div className="md:flex gap-x-4 md:gap-x-6 hidden">
            <SocialButton type={SocialEnum.FACEBOOK} size="sm"/>
            <SocialButton type={SocialEnum.LINKEDIN} size="sm"/>
            <SocialButton type={SocialEnum.INSTAGRAM} size="sm"/>
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row gap-y-4 py-2 px-3 md:p-8 xl:px-24 xl:py-12 flex justify-between items-center text-primary-white">
        <div className="text-sm lg:text-base">
          Niko IT Academy. Усі права захищені © 2024
        </div>
        <div className="flex gap-x-4">
          <a href="/" className="text-sm lg:text-xl text-primary-gray underline">Договір оферти</a>
          <a href="/" className="text-sm lg:text-xl text-primary-gray underline">Політика конфіденційності</a>
        </div>
        <div className="hidden xl:flex gap-x-6">
          <SocialButton type={SocialEnum.FACEBOOK}/>
          <SocialButton type={SocialEnum.LINKEDIN}/>
          <SocialButton type={SocialEnum.INSTAGRAM}/>
        </div>
      </div>
    </footer>
  );
};
