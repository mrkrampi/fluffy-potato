import { IFaq, IFaqCategory } from '@/interfaces/model-types';
import { FaqGroupSection } from '@/app/(public)/faq/_components/faq-group-section';
import { Section } from '@/components/markup/section';

type Props = {
  items: Map<IFaqCategory['id'], Array<IFaq>>;
}

export const GroupedFaqList = ({ items }: Readonly<Props>) => {
  const getGroups = () => {
    return Array.from(items.keys()).map((category: IFaqCategory['id']) => {
      return (
        <FaqGroupSection key={category} category={category} items={items.get(category)!}/>
      );
    });
  };

  return (
    <Section className="lg:py-0 md:pt-0 pt-0 lg:pt-[100px]">
      {getGroups()}
    </Section>
  );
};
