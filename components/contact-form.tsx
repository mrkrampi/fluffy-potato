'use client';

import InputMask from 'react-input-mask';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SocialButton } from '@/components/social-button';
import { SocialEnum } from '@/enums/social.enum';

export const ContactForm = () => {
  return (
    <div className="max-w-screen-2xl px-6 py-20 mx-auto md:py-24 md:px-32 bg-contact-form bg-cover bg-center rounded-3xl shadow-sm shadow-primary-accent">
      <h4 className="max-w-5xl uppercase text-primary-white text-4xl md:text-6xl xl:text-[6.5rem] leading-none font-medium tracking-tighter text-center xl:text-left font-unbounded">
        Звʼязатись з нами
      </h4>
      <p className="xl:w-1/2 text-center xl:text-left xl:text-xl text-primary-white tracking-tighter md:my-8 xl:my-16">
        Залишилися до нас питання, або потрібна наша консультація чи допомога з вибором курсу? Заповніть форму зворотнього звʼязку, і наш менеджер звʼяжеться з вами протягом доби
      </p>
      <div>
        <div className="my-12 max-w-sm w-full">
          <div className="md:my-6 xl:my-8">
            <Label htmlFor="name" className="text-semibold text-base text-primary-white">
              <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
              Ваше імʼя
            </Label>
            <Input
              id="name"
              placeholder="Імʼя"
              name="name"
              type="text"
              className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none text-primary-white"
            />
          </div>
          <div className="md:my-6 xl:my-8">
            <Label htmlFor="email" className="text-semibold text-base text-primary-white">
              <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
              Ваш Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              name="email"
              type="email"
              className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none text-primary-white"
            />
          </div>
          <div className="md:my-6 xl:my-8">
            <Label htmlFor="phone" className="text-semibold text-base text-primary-white">
              <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
              Контактний номер
            </Label>
            <InputMask mask="+380 99 999 99 99" maskChar=" ">
              {/*@ts-ignore*/}
              {(inputProps) => {
                return (
                  <Input
                    id="phone"
                    placeholder="+380"
                    name="phone"
                    type="tel"
                    className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none text-primary-white placeholder:text-primary-white"
                    {...inputProps}
                  />
                );
              }}
            </InputMask>;
          </div>
          <div className="md:my-6 xl:my-8">
            <Label htmlFor="request" className="text-semibold text-base text-primary-white">
              <span className="text-red-500 text-2xl mr-4 relative top-1.5">*</span>
              Ваш запит
            </Label>
            <Input
              id="request"
              placeholder="Ваш запит"
              name="request"
              type="text"
              className="bg-transparent border-0 border-b-2 focus-visible:ring-5 rounded-none text-primary-white"
            />
          </div>
        </div>
        <div className="flex gap-x-5 -mx-3">
          <Button
            size="lg"
            variant="cta"
            className="bg-primary-white text-primary-accent rounded-3xl h-50 text-xl font-semibold md:w-52"
          >
            Надіслати
          </Button>
          <SocialButton type={SocialEnum.INSTAGRAM}/>
          <SocialButton type={SocialEnum.LINKEDIN}/>
        </div>
      </div>
    </div>
  )
}
