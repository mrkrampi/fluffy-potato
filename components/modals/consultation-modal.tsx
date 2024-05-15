'use client';

import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/contact-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const ConsultationModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="xlg"
          variant="cta"
          className="text-primary-accent bg-primary-white max-w-[240px] w-full whitespace-pre-line leading-none"
        >
          Безкоштовна консультація
        </Button>
      </DialogTrigger>

      <DialogContent className="w-fit h-fit p-0 border-0 bg-transparent max-w-full">
        <ContactForm isModalMode/>
      </DialogContent>
    </Dialog>
  )
}
