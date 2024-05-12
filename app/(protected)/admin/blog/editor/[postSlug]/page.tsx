import { redirect } from 'next/navigation';

import { getPostById } from '@/db/post-queries';
import { PostEditor } from '@/app/(protected)/admin/blog/_components/post-editor';

type Props = {
  params: {
    postSlug: string;
  }
}

const PostSlugPage = async ({ params: { postSlug } }: Readonly<Props>) => {
  const postData = getPostById(postSlug);

  const [
    post,
  ] = await Promise.all([
    postData,
  ]);

  if (!post) {
    redirect('/admin/blog');
  }

  return (
    <div>
      <PostEditor post={post}/>
    </div>
  );
};

export default PostSlugPage;
