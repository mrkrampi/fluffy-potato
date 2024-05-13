import { PropsWithChildren } from 'react';

import { EdgeStoreProvider } from '@/lib/edgestore';

const ProtectedLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <EdgeStoreProvider>
      <div className="h-full w-full">
        {children}
      </div>
    </EdgeStoreProvider>
  );
};

export default ProtectedLayout;
