import { HeroSection } from '@/components/sections/hero-section';
import { CourseSection } from '@/components/sections/course-section';
import { MiniCourseSection } from '@/components/sections/mini-course-section';
import { InformationSection } from '@/components/sections/information-section';
import { StudyFormatsSection } from '@/components/sections/study-formats-section';
import { StudentsBenefitsSection } from '@/components/sections/students-benefits-section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';
import { FaqSection } from '@/components/sections/faq-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-0 px-5 bg-primary-black">
      <HeroSection/>
      <InformationSection/>
      <CourseSection/>
      <MiniCourseSection/>
      <StudyFormatsSection/>
      <StudentsBenefitsSection/>
      <StudentsStoriesSection/>
      <FaqSection/>
    </main>
  );
}
