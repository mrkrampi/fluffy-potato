import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';
import { Header } from '@/app/(protected)/_components/header';
import { CoverImageModal } from '@/app/(protected)/admin/blog/editor/_components/cover-image-modal';
import { UpsertAuthorModal } from '@/components/modals/upsert-author-modal';

const AdminLayout = async ({ children }: Readonly<PropsWithChildren>) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-full bg-white w-full">
        <Header/>
        {children}

        <CoverImageModal/>
        <UpsertAuthorModal/>
      </div>
    </SessionProvider>
  );
};

export default AdminLayout;
