import { PropsWithChildren } from 'react';

import { Footer } from '@/components/markup/footer';
import { Header } from '@/components/markup/header';

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="border-b-[6px] border-primary-accent">
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default PublicLayout;
