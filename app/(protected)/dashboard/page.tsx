import { auth } from '@/auth';

const DashboardPage = async () => {
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

export default DashboardPage;
