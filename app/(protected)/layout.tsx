import { PropsWithChildren } from 'react';

const ProtectedLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div className="h-full bg-white">
      {children}
    </div>
  );
};

export default ProtectedLayout;
