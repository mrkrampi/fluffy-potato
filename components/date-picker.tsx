'use client';

import { useState } from 'react';
import { CalendarIcon, Trash } from 'lucide-react';
import { SelectSingleEventHandler } from 'react-day-picker';

import { cn, formatDate } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import moment from 'moment';

type Props = {
  selected: Date | null | undefined;
  onSelect?: (date?: Date) => void;
}

export const DatePicker = ({ selected, onSelect }: Readonly<Props>) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleOnSelect: SelectSingleEventHandler = (date?: Date) => {
    onSelect?.(moment(date).utc(true).toDate());
    setIsPopoverOpen(false);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-full justify-start text-left font-normal', !selected && 'text-muted-foreground')}
        >
          <CalendarIcon className="mr-2 h-4 w-4"/>
          {selected ? formatDate(selected) : <span>Вибрати дату</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={selected as any} onSelect={handleOnSelect} initialFocus/>
      </PopoverContent>
    </Popover>
  );
};
