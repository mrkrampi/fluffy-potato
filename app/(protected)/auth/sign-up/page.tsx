import { Suspense } from 'react';

import { SignUpForm } from '@/components/auth/sign-up-form';

const SignUpPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpForm/>
    </Suspense>
  );
};

export default SignUpPage;
