import { getFaqCategories, getFaqs } from '@/db/faq-queries';
import { FaqTable } from '@/app/(protected)/admin/(with-sidebar)/faq/_components/faq-table';
import { AddFaqButton } from '@/app/(protected)/admin/(with-sidebar)/faq/_components/add-faq-button';
import { UpsertFeedbackModal } from '@/components/modals/upsert-feedback-modal';
import { UpsertFaqModal } from '@/components/modals/upsert-faq-modal';

const FaqPage = async () => {
  const faqData = getFaqs();
  const faqCategoriesData = getFaqCategories();

  const [
    faqList,
    faqCategories,
  ] = await Promise.all([
    faqData,
    faqCategoriesData,
  ]);

  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="ml-auto flex items-center gap-2">
        <AddFaqButton/>
      </div>

      <FaqTable faqList={faqList}/>

      <UpsertFaqModal categories={faqCategories}/>
    </div>
  );
};

export default FaqPage;
