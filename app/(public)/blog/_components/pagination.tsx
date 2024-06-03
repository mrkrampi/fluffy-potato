import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type Props = {
  countOfPages: number;
}

export const Pagination = ({ countOfPages }: Readonly<Props>) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page') ?? 1);

  const nextPage = () => {
    if (currentPage === countOfPages) {
      return;
    }

    handlePageChange(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage === 1) {
      return;
    }

    handlePageChange(currentPage - 1);
  };

  const handlePageChange = (page: number) => {
    console.log(page);
    router.push(pathname + `?page=${page}`, { scroll: false });
  };

  return (
    <div className="flex gap-2 items-center">
      <div
        className="mx-4 cursor-pointer w-11 lg:w-[106px] h-1 bg-primary-white relative before:absolute before:border-b-4 before:border-l-4 before:border-primary-white before:w-4 before:h-4 before:rotate-45 before:left-0 before:top-1/2 before:-translate-y-1/2"
        onClick={previousPage}
      />

      {
        new Array(countOfPages).fill(null).map((_, index) => ((
          <div
            key={index}
            className={cn(
              'border-[1px] border-primary-accent text-primary-white font-semibold w-8 h-8 rounded-md flex items-center justify-center cursor-pointer',
              index + 1 === currentPage && 'bg-primary-accent',
            )}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </div>
        )))
      }

      <div
        className="mx-4 cursor-pointer w-11 lg:w-[106px] h-1 bg-primary-white relative before:absolute before:border-t-4 before:border-r-4 before:border-primary-white before:w-4 before:h-4 before:rotate-45 before:right-0 before:top-1/2 before:-translate-y-1/2"
        onClick={nextPage}
      />
    </div>
  );
};
