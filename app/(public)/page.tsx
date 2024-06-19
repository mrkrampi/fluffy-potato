import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact-form';
import { FaqSection } from '@/components/sections/faq-section';
import { HeroSection } from '@/components/sections/hero-section';
import { CourseSection } from '@/components/sections/course-section';
import { MiniCourseSection } from '@/components/sections/mini-course-section';
import { InformationSection } from '@/components/sections/information-section';
import { StudyFormatsSection } from '@/components/sections/study-formats-section';
import { StudentsBenefitsSection } from '@/components/sections/students-benefits-section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';
import { JsonLd } from '@/components/json-ld';
import { FAQ_MICRODATA, ORGANIZATION_MICRODATA } from '@/consts/microdata';

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.BASE_URL}/`,
  }
}

export default function Home() {
  return (
    <>
      <HeroSection/>
      <InformationSection/>
      <CourseSection/>
      <MiniCourseSection/>
      <StudyFormatsSection/>
      <StudentsBenefitsSection/>
      <div className="bg-stories-section relative bg-no-repeat">
        <StudentsStoriesSection/>
        <FaqSection/>
      </div>
      <ContactForm/>

      <JsonLd data={ORGANIZATION_MICRODATA}/>
      <JsonLd data={FAQ_MICRODATA}/>
    </>
  );
}
