'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import * as pixel from '@/lib/facebook-pixel';

export const FacebookPixelManager = () => {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    pixel.trackPageView();
  }, [pathname, loaded]);

  return (
    <div>
      <Script
        id="fb-pixel"
        src="/scripts/pixel.js"
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={pixel.FB_PIXEL_ID}
      />
    </div>
  );
};
