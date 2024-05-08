import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';

import { auth } from '@/auth';
import { Header } from '@/app/(protected)/_components/header';

const AdminLayout = async ({ children }: Readonly<PropsWithChildren>) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="h-full bg-white w-full">
        <Header/>
        {children}
      </div>
    </SessionProvider>
  );
};

export default AdminLayout;
