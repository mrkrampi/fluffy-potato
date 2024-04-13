import { ContactForm } from '@/components/contact-form';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="w-full h-full pt-36 bg-primary-black">
      <div className="lg:mb-[400px] mx-8">
        <ContactForm/>
      </div>
      <div className="border-l-primary-white border-b-2">
        <div className="w-full py-2 px-8 lg:py-20 lg:px-24 flex justify-between items-center">
          <div>
            <div className="relative w-36 h-14">
              <Image
                src="/niko-it-acedemy-logo.svg"
                alt="Niko IT Acedemy Logo"
                fill
              />
            </div>
            <div className="flex flex-col mt-8">
              <div className="text-primary-gray">
                Email
              </div>
              <a className="text-primary-white text-xl mt-2" href="mailto:niko-it-acedemy@gmail.com">
                nikoitacademy@gmail.com
              </a>
            </div>
          </div>
          <div className="hidden lg:flex gap-x-10">
            <div className="relative w-24 h-32">
              <Image
                src="visa.svg"
                alt="Visa"
                fill
              />
            </div>
            <div className="relative w-48 h-32">
              <Image
                src="mastercard.svg"
                alt="Visa"
                fill
              />
            </div>
            <div className="relative w-40 h-32">
              <Image
                src="way4pay.svg"
                alt="Visa"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-primary-white max-w-80 text-2xl text-center">
              Розпочни свою<br/>карʼєру в It
            </div>
            <div className="mt-12 flex justify-between w-full gap-x-4">
              <Button
                asChild
                size="lg"
                className="bg-primary-accent rounded-3xl"
              >
                <a href="/">Курси</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="rounded-3xl bg-primary-black border-2 border-primary-white"
              >
                <a href="/">Про нас</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full py-2 px-8 flex lg:hidden justify-between items-center">
          <div className="flex lg:hidden gap-x-10">
            <div className="relative w-16 h-24">
              <Image
                src="visa.svg"
                alt="Visa"
                fill
              />
            </div>
            <div className="relative w-32 h-24">
              <Image
                src="mastercard.svg"
                alt="Visa"
                fill
              />
            </div>
            <div className="relative w-32 h-24">
              <Image
                src="way4pay.svg"
                alt="Visa"
                fill
              />
            </div>
          </div>
          <div className="flex gap-x-6">
            <a href="https://www.facebook.com/profile.php?id=61556998809290" target="_blank" className="w-6 h-6 relative">
              <Image
                src="facebook.svg"
                alt="Facebook"
                fill
              />
            </a>
            <a href="https://ca.linkedin.com/in/niko-it-academy" target="_blank" className="w-6 h-6 relative">
              <Image
                src="linkedin.svg"
                alt="LinkedIn"
                fill
              />
            </a>
            <a href="https://www.instagram.com/niko_it_courses/" target="_blank" className="w-6 h-6 relative">
              <Image
                src="instagram.svg"
                alt="Instagram"
                fill
              />
            </a>
          </div>
        </div>
      </div>
      <div className="p-8 lg:px-24 lg:py-12 flex justify-between items-center text-primary-white">
        <div>
          Niko IT Academy. Усі права захищені © 2024
        </div>
        <div className="flex gap-x-4">
          <a href="/" className="text-xl text-primary-gray underline">Договір оферти</a>
          <a href="/" className="text-xl text-primary-gray underline">Політика конфіденційності</a>
        </div>
        <div className="hidden lg:flex gap-x-6">
          <a href="https://www.facebook.com/profile.php?id=61556998809290" target="_blank" className="w-12 h-12 relative">
            <Image
              src="facebook.svg"
              alt="Facebook"
              fill
            />
          </a>
          <a href="https://ca.linkedin.com/in/niko-it-academy" target="_blank" className="w-12 h-12 relative">
            <Image
              src="linkedin.svg"
              alt="LinkedIn"
              fill
            />
          </a>
          <a href="https://www.instagram.com/niko_it_courses/" target="_blank" className="w-12 h-12 relative">
            <Image
              src="instagram.svg"
              alt="Instagram"
              fill
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
