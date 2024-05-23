'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type Props = {
  articleTitle: string;
}

export const ArticleBreadcrumbs = ({ articleTitle }: Readonly<Props>) =>
  (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-primary-accent hover:text-primary-accent">Niko IT Academy</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-gray"/>

        <BreadcrumbItem>
          <BreadcrumbLink href="/blog" className="text-primary-accent hover:text-primary-accent">Блог</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-gray"/>

        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary-white">{articleTitle}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
