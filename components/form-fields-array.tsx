'use client';

import { Trash } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { Control, Controller, useFieldArray } from 'react-hook-form';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormLabel } from '@/components/ui/form';

type Props = {
  control: Control<any>;
  name: string;
  label: string;
};

export const FormFieldsArray = ({ control, name, label }: Readonly<Props>) => {
  const { pending } = useFormStatus();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="space-y-2">
      <FormLabel>{label}</FormLabel>
      <ul className="space-y-4">
        {fields.map((item, index) => (
          <li className="flex items-center" key={item.id}>
            <Controller
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Lorem ipsum..."
                  type="text"
                  disabled={pending}
                />
              )}
              name={`${name}.${index}`}
              control={control}
            />

            <Button className="ml-2" variant="ghost" onClick={() => remove(index)}>
              <Trash className="w-4 h-4 text-rose-400"/>
            </Button>
          </li>
        ))}
        <Button type="button" onClick={() => append('')}>
          Додати
        </Button>
      </ul>
    </div>
  );
};
