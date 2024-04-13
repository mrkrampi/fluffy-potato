'use client';

import Image from 'next/image';

import InputMask from 'react-input-mask';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const ContactForm = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-24 px-32 bg-contact-form bg-cover bg-center rounded-3xl">
      <h1 className="max-w-5xl uppercase text-primary-white text-[6.5rem] leading-none font-medium tracking-tighter">
        Звʼязатись з нами
      </h1>
      <p className="w-1/2 text-xl text-primary-white tracking-tighter my-16">
        Залишилися до нас питання, або потрібна наша консультація чи допомога з вибором курсу? Заповніть форму зворотнього звʼязку, і наш менеджер звʼяжеться з вами протягом доби
      </p>
      <div>
        <div className="my-12 max-w-sm w-full">
          <div className="my-8">
            <Label htmlFor="name" className="text-semibold text-primary-white">
              <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
              Ваше імʼя
            </Label>
            <Input
              placeholder="Імʼя"
              name="name"
              type="text"
              className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none text-primary-white"
            />
          </div>
          <div className="my-8">
            <Label htmlFor="email" className="text-semibold text-primary-white">
              <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
              Ваш Email
            </Label>
            <Input
              placeholder="Email"
              name="email"
              type="email"
              className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none text-primary-white"
            />
          </div>
          <div className="my-8">
            <Label htmlFor="phone" className="text-semibold text-primary-white">
              <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
              Контактний номер
            </Label>
            <InputMask mask="+380 99 999 99 99" maskChar=" ">
              {/*@ts-ignore*/}
              {(inputProps) => {
                return (
                  <Input
                    placeholder="+380"
                    name="phone"
                    type="tel"
                    className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none text-primary-white placeholder:text-primary-white"
                    {...inputProps}
                  />
                )
              }}
            </InputMask>;
          </div>
          <div className="my-8">
            <Label htmlFor="request" className="text-semibold text-primary-white">
              <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
              Ваш запит
            </Label>
            <Input
              placeholder="Ваш запит"
              name="request"
              type="text"
              className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none text-primary-white"
            />
          </div>
        </div>
        <div className="flex gap-x-5">
          <Button
            size="lg"
            className="bg-primary-white text-primary-accent rounded-3xl h-50 text-xl font-semibold md:w-52 hover:bg-primary-white/90"
          >
            Надіслати
          </Button>
          <a href="https://www.instagram.com/niko_it_courses/" target="_blank" className="w-12 h-12 relative">
            <Image
              src="instagram.svg"
              alt="Instagram"
              fill
            />
          </a>
          <a href="https://ca.linkedin.com/in/niko-it-academy" target="_blank" className="w-12 h-12 relative">
            <Image
              src="linkedin.svg"
              alt="Linkedin"
              fill
            />
          </a>
        </div>
      </div>
    </div>
  )
}
