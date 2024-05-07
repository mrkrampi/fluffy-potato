import { PropsWithChildren } from 'react';

const ProtectedLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div className="h-full bg-white flex items-center justify-center">
      {children}
    </div>
  );
};

export default ProtectedLayout;
