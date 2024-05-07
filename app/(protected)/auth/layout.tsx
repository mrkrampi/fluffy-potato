import { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div className="bg-register-modal h-full w-full bg-cover flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
