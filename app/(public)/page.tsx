import { ContactForm } from '@/components/contact-form';
import { FaqSection } from '@/components/sections/faq-section';
import { HeroSection } from '@/components/sections/hero-section';
import { CourseSection } from '@/components/sections/course-section';
import { MiniCourseSection } from '@/components/sections/mini-course-section';
import { InformationSection } from '@/components/sections/information-section';
import { StudyFormatsSection } from '@/components/sections/study-formats-section';
import { StudentsBenefitsSection } from '@/components/sections/students-benefits-section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';

export default function Home() {
  return (
    <>
      <HeroSection/>
      <InformationSection/>
      <CourseSection/>
      <MiniCourseSection/>
      <StudyFormatsSection/>
      <StudentsBenefitsSection/>
      <StudentsStoriesSection/>
      <FaqSection/>
      <ContactForm/>
    </>
  );
}
