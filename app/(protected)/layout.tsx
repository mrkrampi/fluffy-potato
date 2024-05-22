import { PropsWithChildren } from 'react';

const ProtectedLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div className="h-full w-full">
      {children}
    </div>
  );
};

export default ProtectedLayout;
