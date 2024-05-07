import { DESCRIPTION, LIST, TITLE } from '@/app/offert/_const';
import { TermsList } from '@/app/offert/_components/terms-list';
import { Section } from '@/components/markup/section';

const OffertPage = () => {
  return (
    <div className="h-fit bg-primary-white">
      <Section className="lg:max-w-screen-2xl mx-8 h-fit lg:py-8 md:py-8 py-8">
        <h1 className="text-2xl">{TITLE}</h1>
        <p>{DESCRIPTION}</p>

        <TermsList items={LIST} isHeading/>
      </Section>
    </div>
  );
};

export default OffertPage;
