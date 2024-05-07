'use client';

import InputMask from 'react-input-mask';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SocialButton } from '@/components/social-button';
import { SocialEnum } from '@/enums/social.enum';
import { Heading } from '@/components/markup/heading';
import { Section } from '@/components/markup/section';

export const ContactForm = () => {
  return (
    <Section>
      <div
        className="bg-contact-form bg-cover bg-center rounded-3xl shadow-sm shadow-primary-accent px-4 py-20 lg:py-24">
        <div>
          <Heading level={4} className="text-center text-[32px]">
            Звʼязатись з нами
          </Heading>

          <p className="xl:w-1/2 text-center xl:text-left xl:text-xl text-primary-white tracking-tighter mb-12 mt-8 xl:my-16">
            Залишилися до нас питання, або потрібна наша консультація чи допомога з вибором курсу? Заповніть форму зворотнього звʼязку, і
            наш
            менеджер звʼяжеться з вами протягом доби
          </p>
          <div>
            <div className="my-12 max-w-sm w-full mx-auto lg:mx-0">
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
                </InputMask>
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

            <div className="flex justify-center lg:justify-start gap-x-5 -mx-3">
              <Button
                size="lg"
                variant="cta"
                className="bg-primary-white text-primary-accent rounded-3xl h-50 text-xl font-semibold w-[190px] md:w-52"
              >
                Надіслати
              </Button>
              <SocialButton type={SocialEnum.INSTAGRAM}/>
              <SocialButton type={SocialEnum.LINKEDIN}/>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
