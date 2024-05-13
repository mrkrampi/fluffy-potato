import { auth } from '@/auth';
import { SmileIcon } from 'lucide-react';

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className="h-full w-full flex flex-col gap-3 items-center justify-center">
      <SmileIcon className="w-20 h-20"/>
      I don't know what to show here
    </div>
  )
}

export default AdminPage;
