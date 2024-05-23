import Link from 'next/link';
import { PropsWithChildren } from 'react';

const SettingsLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Налаштування</h1>
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav
          className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
        >
          <Link href="/admin/settings">
            Загальні
          </Link>
          <Link href="/admin/settings/fake-authors">Автори для блогу</Link>
          <Link href="#">Дозволені Email</Link>
        </nav>
        <div className="grid gap-6">
          {children}
        </div>
      </div>
    </main>
  );
};

export default SettingsLayout;