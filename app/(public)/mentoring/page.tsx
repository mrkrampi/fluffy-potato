import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { ContactForm } from '@/components/contact-form';
import { AboutTeacherSection } from '@/components/sections/about-teacher-section';
import { MentoringHeadingSection } from '@/app/(public)/mentoring/_components/mentoring-heading-section';
import { MentoringBenefitsSection } from '@/app/(public)/mentoring/_components/mentoring-benefits-section';
import { MentoringProcessSection } from '@/app/(public)/mentoring/_components/mentoring-process-section';
import { MentoringDirectionsSection } from '@/app/(public)/mentoring/_components/mentoring-directions-section';

import mentoringBg from '@/public/mentoring.webp';
import Image from 'next/image';

export const metadata: Metadata = {
  title: siteConfig.mentoringTitle,
  description: siteConfig.mentoringDescription,
};

const MentoringPage = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <MentoringHeadingSection/>

        <Image
          src={mentoringBg}
          alt="Mentoring"
          className="object-cover absolute -right-44 md:w-3/4 lg:w-[60vw] top-80 md:top-52 lg:top-[40vh] xl:top-52 -rotate-12 opacity-50"
        />

        <MentoringBenefitsSection/>
      </div>
      <MentoringProcessSection/>
      <MentoringDirectionsSection/>
      <AboutTeacherSection/>
      <ContactForm/>
    </>
  );
};

export default MentoringPage;
