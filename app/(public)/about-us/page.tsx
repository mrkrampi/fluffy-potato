import Image from 'next/image';
import type { Metadata } from 'next';

import 'react-circular-progressbar/dist/styles.css';

import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/json-ld';
import { Section } from '@/components/markup/section';
import { ABOUT_US_WEBPAGE_MICRODATA } from '@/consts/microdata';
import { ContactForm } from '@/components/contact-form';
import { PerksSection } from '@/app/(public)/about-us/_component/perks-section';
import { WhyUsSection } from '@/app/(public)/about-us/_component/why-us-section';
import { AboutUsSection } from '@/app/(public)/about-us/_component/about-us.section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';

import whyUsImg from '@/public/why-us.webp';
import aboutUsImg from '@/public/about-us.webp';

export const metadata: Metadata = {
  title: siteConfig.aboutUsTitle,
  description: siteConfig.aboutUsDescription,
};

const AboutUsPage = () => {
  return (
    <>
      <div className="text-primary-white pt-[86px] md:pt-[108px]">
        <Section className="flex items-center py-12 md:py-40 lg:py-52">
          <h1 className="lg:text-[60px] text-[27px] md:text-[54px] uppercase font-unbounded tracking-tight">
            створюємо <span className="text-primary-accent">міцну  основу</span> для <span
            className="text-primary-accent">успішної кар&apos;єри</span> в IT, сприяючи зростанню професіоналізму <span
            className="text-primary-accent">українців</span>
          </h1>
        </Section>

        <section className="h-[100px] md:h-56 lg:h-96 relative">
          <Image src={aboutUsImg} alt="About us" fill className="object-cover"/>
        </section>

        <div className="relative overflow-hidden">
          <AboutUsSection/>

          <Image
            src={whyUsImg}
            alt="Why Us"
            className="object-contain opacity-50 absolute bottom-0 w-3/4 lg:w-full md:h-3/4 lg:h-full lg:top-[42%] lg:-translate-y-1/2 lg:-right-[20vw] md:-right-[35%] top-[28%] -right-[10%] md:top-0"
          />

          <WhyUsSection/>

          <PerksSection/>
        </div>

        <StudentsStoriesSection withoutBackground/>

        <ContactForm withCoursesLink/>
      </div>

      <JsonLd data={ABOUT_US_WEBPAGE_MICRODATA}/>
    </>
  );
};

export default AboutUsPage;
