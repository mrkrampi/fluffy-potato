'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

const WithSidebarLayout = ({ children }: Readonly<PropsWithChildren>) => {
  const pathname = usePathname();

  const isActiveRoute = (route: string) => pathname === route;

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 bg-white">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav
          className="grid gap-4 text-sm text-muted-foreground"
        >
          <Link
            href="/admin/courses"
            className={isActiveRoute('/admin/courses') ? 'text-black font-bold' : ''}
          >
            Курси
          </Link>

          <Link
            href="/admin/blog"
            className={isActiveRoute('/admin/blog') ? 'text-black font-bold' : ''}
          >
            Блог
          </Link>

          <Link
            href="/admin/fake-authors"
            className={isActiveRoute('/admin/fake-authors') ? 'text-black font-bold' : ''}
          >
            Автори для блогу
          </Link>

          <Link
            href="/admin/feedbacks"
            className={isActiveRoute('/admin/feedbacks') ? 'text-black font-bold' : ''}
          >
            Відгуки
          </Link>

          <Link
            href="/admin/faq"
            className={isActiveRoute('/admin/faq') ? 'text-black font-bold' : ''}
          >
            FAQ
          </Link>

          <Link
            href="/admin/study-formats"
            className={isActiveRoute('/admin/study-formats') ? 'text-black font-bold' : ''}
          >
            Формати навчання
          </Link>
        </nav>
        <div className="grid gap-6">
          {children}
        </div>
      </div>
    </main>
  );
};

export default WithSidebarLayout;