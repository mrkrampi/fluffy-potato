import { redirect } from 'next/navigation';

import { getPostById } from '@/db/post-queries';
import { PostEditor } from '@/app/(protected)/admin/blog/_components/post-editor';
import { getAllAuthors } from '@/db/author-queries';

type Props = {
  params: {
    postSlug: string;
  }
}

const PostSlugPage = async ({ params: { postSlug } }: Readonly<Props>) => {
  const postData = getPostById(postSlug);
  const authorsData = getAllAuthors();

  const [
    post,
    authors,
  ] = await Promise.all([
    postData,
    authorsData,
  ]);

  if (!post) {
    redirect('/admin/blog');
  }

  return (
    <div>
      <PostEditor post={post} authors={authors}/>
    </div>
  );
};

export default PostSlugPage;
