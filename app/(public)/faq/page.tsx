import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { IFaq, IFaqCategory } from '@/interfaces/model-types';
import { getFaqCategories, getFaqs } from '@/db/faq-queries';
import { TopSection } from '@/app/(public)/faq/_components/top-section';
import { GroupedFaqList } from '@/app/(public)/faq/_components/grouped-faq-list';

export const metadata: Metadata = {
  title: siteConfig.faqTitle,
  description: siteConfig.faqDescription,
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/faq`,
  },
};

const FaqPage = async () => {
  const faqData = getFaqs();
  const faqCategoryData = getFaqCategories();

  const [
    faqItems,
    faqCategories,
  ] = await Promise.all([
    faqData,
    faqCategoryData,
  ]);

  const faqGroupedByCategory = faqItems.reduce((acc: Map<IFaqCategory['id'], Array<IFaq>>, item: IFaq) => {
    const categoryId = item.category?.id ?? '';
    return acc.set(categoryId, (acc.get(categoryId) || []).concat(item));
  }, new Map<IFaqCategory['id'], Array<IFaq>>);

  return (
    <>
      <TopSection categories={faqCategories}/>

      <GroupedFaqList items={faqGroupedByCategory}/>
    </>
  );
};

export default FaqPage;
