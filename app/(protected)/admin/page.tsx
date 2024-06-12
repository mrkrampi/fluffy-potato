import { redirect } from 'next/navigation';

const AdminPage = async () => {
  redirect('/admin/courses');
}

export default AdminPage;
