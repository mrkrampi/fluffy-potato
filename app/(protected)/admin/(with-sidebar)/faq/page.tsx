import { getFaqs } from '@/db/faq-queries';
import { FaqTable } from '@/app/(protected)/admin/(with-sidebar)/faq/_components/faq-table';
import { AddFaqButton } from '@/app/(protected)/admin/(with-sidebar)/faq/_components/add-faq-button';

const FaqPage = async () => {
  const faqData = getFaqs();

  const [faqList] = await Promise.all([faqData]);

  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="ml-auto flex items-center gap-2">
        <AddFaqButton/>
      </div>

      <FaqTable faqList={faqList}/>
    </div>
  );
};

export default FaqPage;
