import { auth } from '@/auth';

const AdminPage = async () => {
  const session = await auth();

  return (
    <div>
      Dashboard
      <pre>
        {JSON.stringify(session, null, 2)}
      </pre>
    </div>
  )
}

export default AdminPage;
