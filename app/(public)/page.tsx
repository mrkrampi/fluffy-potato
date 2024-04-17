import { HeroSection } from '@/components/sections/hero-section';
import { CourseSection } from '@/components/sections/course-section';
import { MiniCourseSection } from '@/components/sections/mini-course-section';
import { InformationSection } from '@/components/sections/information-section';
import { StudyFormatsSection } from '@/components/sections/study-formats-section';
import { StudentsBenefitsSection } from '@/components/sections/students-benefits-section';
import { StudentsStoriesSection } from '@/components/sections/students-stories-section';
import { FaqSection } from '@/components/sections/faq-section';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-0 md:px-2 xl:px-5 bg-primary-black">
      <Header/>
      <div className="w-full">
        <HeroSection/>
      </div>
      <div className="w-full my-20 mt-10 xl:mt-0">
        <InformationSection/>
      </div>
      <div className="w-full my-20 md:mt-14 xl:mt-0">
        <CourseSection/>
      </div>
      <div className="w-full my-20">
        <MiniCourseSection/>
      </div>
      <div className="w-full my-20 md:mt-[120px] xl:mt-[384px]">
        <StudyFormatsSection/>
      </div>
      <div className="my-20 w-full md:mt-[218px] xl:mt-[400px]">
        <StudentsBenefitsSection/>
      </div>
      <div className="my-20 w-full md:mt-[160px] lg:mt-[346px]">
        <StudentsStoriesSection/>
      </div>
      <div className="my-20 w-full lg:mt-[360px] lg:mb-40">
        <FaqSection/>
      </div>
    </main>
  );
}
