import { PropsWithChildren } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import { Footer } from '@/components/markup/footer';
import { Header } from '@/components/markup/header';
import { FacebookPixelManager } from '@/app/(public)/_components/facebook-pixel-manager';

const PublicLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="border-b-[6px] border-primary-accent">
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </div>

      {process.env.NODE_ENV === 'production' && (<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!}/>)}
      {process.env.NODE_ENV === 'production' && (<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!}/>)}
      {process.env.NODE_ENV === 'production' && (<FacebookPixelManager/>)}
    </>
  );
};

export default PublicLayout;
