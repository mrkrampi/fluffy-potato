import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

const DashboardLayout = async ({ children }: Readonly<PropsWithChildren>) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default DashboardLayout;
