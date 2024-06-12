'use client';

import { PlusCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useUpsertStudyFormat } from '@/store/use-upsert-study-format';

export const AddStudyFormatButton = () => {
  const { open } = useUpsertStudyFormat();

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
            Додати формат навчання
          </span>
    </Button>
  );
};
