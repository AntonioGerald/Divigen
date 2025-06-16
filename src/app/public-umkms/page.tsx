import { Suspense } from 'react';
import ResetPasswordClient from '../reset-password/ResetPasswordClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Memuat...</div>}>
      <ResetPasswordClient />
    </Suspense>
  );
}
