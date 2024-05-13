import { ListFilter } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { getAllPosts } from '@/db/post-queries';
import { PostsTable } from '@/app/(protected)/admin/blog/_components/posts-table';
import { CreatePostModal } from '@/app/(protected)/admin/blog/_components/create-post-modal';

const BlogPage = async () => {
  const postsData = getAllPosts();

  const [
    postsList,
  ] = await Promise.all([
    postsData,
  ]);

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Блог</h1>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <CreatePostModal/>
      </div>

      <PostsTable postsList={postsList}/>
    </main>
  );
};

export default BlogPage;
