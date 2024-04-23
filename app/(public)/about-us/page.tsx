import Image from 'next/image';
import type { Metadata } from 'next';

import 'react-circular-progressbar/dist/styles.css';

import whyUsImg from '@/public/why-us.webp';
import aboutUsImg from '@/public/about-us.webp';

import { siteConfig } from '@/config/site';
import { ContactForm } from '@/components/contact-form';
import { PerksSection } from '@/app/(public)/about-us/_component/perks-section';
import { WhyUsSection } from '@/app/(public)/about-us/_component/why-us-section';
import { AboutUsSection } from '@/app/(public)/about-us/_component/about-us.section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';

export const metadata: Metadata = {
  title: siteConfig.aboutUsTitle,
  description: siteConfig.aboutUsDescription,
};

const AboutUsPage = () => {
  return (
    <main className="text-primary-white">
      <section className="h-screen flex items-center md:mx-4 lg:mx-24">
        <h1 className="lg:text-6xl text-5xl uppercase font-unbounded tracking-tight">
          створюємо <span className="text-primary-accent">міцну  основу</span> для <span
          className="text-primary-accent">успішної кар&apos;єри</span> в IT, сприяючи зростанню професіоналізму <span
          className="text-primary-accent">українців</span>
        </h1>
      </section>

      <section className="md:h-56 lg:h-96 relative">
        <Image src={aboutUsImg} alt="About us" fill className="object-cover"/>
      </section>

      <div className="relative overflow-hidden">
        <AboutUsSection/>

        <Image
          src={whyUsImg}
          alt="Why Us"
          className="object-contain opacity-50 absolute bottom-0 md:w-3/4 lg:w-full md:h-3/4 lg:h-full lg:top-[42%] lg:-translate-y-1/2 lg:-right-[20vw] md:-right-[35%] md:top-0"
        />

        <WhyUsSection/>

        <PerksSection/>
      </div>

      <div className="lg:pt-[200px] lg:pb-20">
        <StudentsStoriesSection withoutBackground/>
      </div>

      <div className="lg:pb-64">
        <ContactForm/>
      </div>
    </main>
  );
};

export default AboutUsPage;
