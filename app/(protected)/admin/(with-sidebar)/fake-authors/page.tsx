import { getAllAuthors } from '@/db/author-queries';
import { AddAuthorButton } from '@/app/(protected)/admin/(with-sidebar)/fake-authors/_components/add-author-button';
import { AuthorsTable } from '@/app/(protected)/admin/(with-sidebar)/fake-authors/_components/authors-table';

const FakeAuthors = async () => {
  const authorsData = getAllAuthors();

  const [
    authors,
  ] = await Promise.all([
    authorsData,
  ]);

  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="ml-auto flex items-center gap-2">
        <AddAuthorButton/>
      </div>

      <AuthorsTable authors={authors}/>
    </div>
  );
};

export default FakeAuthors;
