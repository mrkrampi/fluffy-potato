import Link from 'next/link';
import Image from 'next/image';
import { createReactBlockSpec } from '@blocknote/react';

import { Button } from '@/components/ui/button';

import registerModalBackground from '@/public/backgrounds/register-modal-background.webp';

export const ChooseCourseBlock = createReactBlockSpec({
    type: 'chooseCourse',
    content: 'none',
    propSchema: {},
  },
  {
    render: () => {
      return (
        <div className="w-full relative h-64 flex items-center justify-center skip">
          <Image
            src={registerModalBackground}
            alt="Обрати курс"
            fill
            className="object-fill"
          />

          <Button asChild className="z-10 relative w-[356px] h-[104px] bg-primary-accent text-primary-white rounded-full font-semibold text-[32px] hover:bg-primary-accent">
            <Link href="/courses" target="_blank">Обрати курс</Link>
          </Button>
        </div>
      );
    },
  },
);
