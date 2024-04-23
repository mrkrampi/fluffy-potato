import { PropsWithChildren } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header/>
      {children}
      <Footer/>
    </main>
  );
};

export default PublicLayout;
