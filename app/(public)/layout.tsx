import { PropsWithChildren } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

export default PublicLayout;
