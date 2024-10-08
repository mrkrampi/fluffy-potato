import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';
import { Header } from '@/app/(protected)/_components/header';
import { UpsertAuthorModal } from '@/components/modals/upsert-author-modal';
import { CoverImageModal } from '@/app/(protected)/admin/(without-sidebar)/blog/editor/_components/cover-image-modal';
import { UpsertStudyFormatModal } from '@/components/modals/upsert-study-format-modal';
import { UpsertFeedbackModal } from '@/components/modals/upsert-feedback-modal';
import { UpsertFaqCategoryModal } from '@/components/modals/upsert-faq-category-modal';

const AdminLayout = async ({ children }: Readonly<PropsWithChildren>) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-full bg-white w-full">
        <Header/>
        {children}

        <CoverImageModal/>
        <UpsertAuthorModal/>
        <UpsertFeedbackModal/>
        <UpsertFaqCategoryModal/>
        <UpsertStudyFormatModal/>
      </div>
    </SessionProvider>
  );
};

export default AdminLayout;
