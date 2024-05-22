'use client';

import { posts } from '@/db/schema';
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { Loader } from 'lucide-react';

type Props = {
  article: typeof posts.$inferSelect;
}

export const Article = ({ article }: Readonly<Props>) => {
  const Editor = useMemo(
    () => dynamic(() => import('@/components/editor'),
      {
        ssr: false,
        loading: () => (
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loader className="animate-spin w-12 h-12"/>
          </div>
        ),
      }),
    []);

  return (
    <div>
      <Editor
        theme="dark"
        editable={false}
        initialContent={article.content || ''}
      />
    </div>
  );
};
