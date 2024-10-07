import React from 'react';
import Link from 'next/link';
import ClientListPage from '@/others/ClientListPage';

export default function Page() {
  return (
    <>
      <Link href="/start/next" style={{position: 'fixed', top: 0, background: 'red'}}>Move next page</Link>
      <ClientListPage />
    </>
  );
}
