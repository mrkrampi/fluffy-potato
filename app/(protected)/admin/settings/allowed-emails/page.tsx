import { getAllowedEmails } from '@/db/allowed-emails-quesries';
import { AddAllowedEmail } from '@/app/(protected)/admin/settings/allowed-emails/_components/add-allowed-email';
import { AllowedEmailsTable } from '@/app/(protected)/admin/settings/allowed-emails/_components/allowed-emails-table';

const AllowedEmailsPage = async () => {
  const allowedEmailsData = getAllowedEmails();

  const [
    allowedEmails,
  ] = await Promise.all([
    allowedEmailsData,
  ]);

  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Дозволені Email</h1>
      </div>

      <div className="ml-auto flex items-center gap-2">
        <AddAllowedEmail/>
      </div>

      <AllowedEmailsTable emails={allowedEmails}/>
    </div>
  );
};

export default AllowedEmailsPage;
