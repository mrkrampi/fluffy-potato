import { getStudyFormats } from '@/db/pricing-queries';
import { StudyFormatsTable } from '@/app/(protected)/admin/(with-sidebar)/study-formats/_components/study-formats-table';
import { AddStudyFormatButton } from '@/app/(protected)/admin/(with-sidebar)/study-formats/_components/add-study-format-button';

const StudyFormatsPage = async () => {
  const studyFormatsData = getStudyFormats();

  const [studyFormatsList,] = await Promise.all([studyFormatsData]);

  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="ml-auto flex items-center gap-2">
        <AddStudyFormatButton/>
      </div>

      <StudyFormatsTable studyFormatsList={studyFormatsList}/>
    </div>
  );
};

export default StudyFormatsPage;
