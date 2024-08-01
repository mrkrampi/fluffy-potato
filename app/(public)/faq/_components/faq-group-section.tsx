import { IFaq, IFaqCategory } from '@/interfaces/model-types';
import { FaqList } from '@/components/faq-list';

type Props = {
  category: IFaqCategory['id'];
  items: Array<IFaq>;
}

export const FaqGroupSection = ({ category, items }: Readonly<Props>) => {
  const categoryName = items.at(0)?.category?.name;

  return (
    <div id={category} className="lg:pt-[100px]">
      <h2 className="text-[32px] lg:text-[40px] text-primary-blue uppercase">{categoryName}</h2>

      <FaqList items={items}/>
    </div>
  )
};
