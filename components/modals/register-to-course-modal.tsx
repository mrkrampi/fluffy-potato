'use client';

import Image from 'next/image';
import InputMask from 'react-input-mask';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SocialEnum } from '@/enums/social.enum';
import { formatNumberWithSpaces } from '@/lib/utils';
import { Heading } from '@/components/markup/heading';
import { SocialButton } from '@/components/social-button';
import { StudyFormatInterface } from '@/interfaces/study-format.interface';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';

import registerModalBackground from '@/public/backgrounds/register-modal-background.webp';

type Props = {
  studyFormat: StudyFormatInterface;
}

export const RegisterToCourseModal = ({ studyFormat }: Readonly<Props>) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="cta"
          className="bg-primary-white mt-6 text-primary-accent rounded-3xl py-3 font-semibold md:w-52 font-onest"
        >
          Записатись
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] p-0 border-0 focus-visible:outline-none">
        <DialogHeader className="relative pt-16 pb-14 px-12 bg-register-modal bg-cover">
          <Heading>
            Форма запису на курс
          </Heading>

          <div className="flex justify-between mt-4">
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
              </div>

              <div className="flex justify-center lg:justify-start gap-x-5 -mx-3">
                <Button
                  size="lg"
                  variant="cta"
                  className="bg-primary-white text-primary-accent rounded-3xl h-50 text-xl font-semibold w-[190px] md:w-52"
                >
                  Записатись
                </Button>
                <SocialButton type={SocialEnum.INSTAGRAM}/>
                <SocialButton type={SocialEnum.LINKEDIN}/>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-y-8 mt-10">
              <div className="grid grid-cols-[310px,375px] items-center">
                <span className="text-primary-white text-4xl">Вибраний формат:</span>
                <span className="text-primary-blue uppercase leading-none text-[40px] text-right">{studyFormat.name}</span>
              </div>

              <div className="grid grid-cols-[310px,375px] items-center">
                <span className="text-primary-white text-4xl">Повна ціна:</span>
                <span className="text-primary-blue uppercase leading-none text-[40px] text-right">
                    {formatNumberWithSpaces(studyFormat.price)} ₴
                  </span>
              </div>

              <div className="grid grid-cols-[310px,375px] items-center">
                <span className="text-primary-white text-4xl">Старт курсу:</span>
                <span className="text-primary-blue uppercase leading-none text-[40px] text-right">19 квітня</span>
              </div>

              <span className="text-primary-white font-xl w-3/4 mt-10">
                  Заповніть форму зворотнього звʼязку, і наш менеджер звʼяжеться з вами протягом 24х годин.
                </span>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
