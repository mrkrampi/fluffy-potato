import { Loader } from 'lucide-react';

const FeedbacksLoading = () => {
  return (
    <div className="min-h-screen relative">
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Loader className="animate-spin w-16 h-16 text-primary-white"/>
      </div>
    </div>
  );
};

export default FeedbacksLoading;
