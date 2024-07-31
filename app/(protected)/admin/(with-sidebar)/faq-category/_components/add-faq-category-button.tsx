'use client';

import { PlusCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useUpsertFaqCategory } from '@/store/use-upsert-faq-category';

export const AddFaqCategoryButton = () => {
  const { open } = useUpsertFaqCategory();

  return (
    <Button
      size="sm"
      className="h-8 gap-1"
      onClick={() => open()}
    >
      <PlusCircle className="h-3.5 w-3.5"/>
      <span
        className="sr-only sm:not-sr-only sm:whitespace-nowrap"
      >
            Додати категорію
          </span>
    </Button>
  );
};
