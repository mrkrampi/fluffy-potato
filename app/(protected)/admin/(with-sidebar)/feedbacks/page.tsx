import { getFeedbacks } from '@/db/feedbacks-queries';
import { AddFeedbackButton } from '@/app/(protected)/admin/(with-sidebar)/feedbacks/_components/add-feedback-button';
import { FeedbacksTable } from '@/app/(protected)/admin/(with-sidebar)/feedbacks/_components/feedbacks-table';

const FeedbacksPage = async () => {
  const feedbacksData = getFeedbacks();

  const [
    feedbacksList,
  ] = await Promise.all([
    feedbacksData,
  ]);

  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="ml-auto flex items-center gap-2">
        <AddFeedbackButton/>
      </div>

      <FeedbacksTable feedbacksList={feedbacksList}/>
    </div>
  );
};

export default FeedbacksPage;
