import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';
import { Header } from '@/app/(protected)/_components/header';
import { CoverImageModal } from '@/app/(protected)/admin/blog/editor/_components/cover-image-modal';

const AdminLayout = async ({ children }: Readonly<PropsWithChildren>) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-full bg-white w-full">
        <Header/>
        {children}

        <CoverImageModal/>
      </div>
    </SessionProvider>
  );
};

export default AdminLayout;
