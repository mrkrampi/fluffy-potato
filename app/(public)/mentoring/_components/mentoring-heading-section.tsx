import { Heading } from '@/components/markup/heading';;
import { MENTORING_SUBTITLE, MENTORING_TITLE } from '@/app/(public)/mentoring/_consts';

export const MentoringHeadingSection = () => {
  return (
    <section className="lg:pt-48 pt-36 lg:pb-52 md:pb-52 pb-36 text-center md:px-8 px-2 lg:px-24 mx-auto relative z-10">
      <Heading level={1}>{MENTORING_TITLE}</Heading>
      <p className="lg:my-16 md:my-14 my-12 text-primary-blue font-medium md:text-xl lg:text-2xl">{MENTORING_SUBTITLE}</p>
    </section>
  )
}
