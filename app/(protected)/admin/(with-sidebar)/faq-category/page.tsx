import { getFaqCategories } from '@/db/faq-queries';
import { FaqCategoryTable } from '@/app/(protected)/admin/(with-sidebar)/faq-category/_components/faq-category-table';
import { AddFaqCategoryButton } from '@/app/(protected)/admin/(with-sidebar)/faq-category/_components/add-faq-category-button';

const FaqPage = async () => {
  const faqCategoriesData = getFaqCategories();

  const [
    faqCategories,
  ] = await Promise.all([
    faqCategoriesData,
  ]);

  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="ml-auto flex items-center gap-2">
        <AddFaqCategoryButton/>
      </div>

      <FaqCategoryTable categories={faqCategories}/>
    </div>
  );
};

export default FaqPage;
