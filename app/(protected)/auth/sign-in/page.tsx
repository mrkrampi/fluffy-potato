import { Suspense } from 'react';

import { SignInForm } from '@/components/auth/sign-in-form';

const SignInPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm/>
    </Suspense>
  );
};

export default SignInPage;
