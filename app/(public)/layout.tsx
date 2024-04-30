import { PropsWithChildren } from 'react';

import { Footer } from '@/components/markup/footer';
import { Header } from '@/components/markup/header';

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
