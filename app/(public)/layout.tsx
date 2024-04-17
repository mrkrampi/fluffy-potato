import { PropsWithChildren } from 'react';

import { Footer } from '@/components/footer';

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  );
};

export default PublicLayout;
