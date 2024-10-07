import React from 'react';
import Link from 'next/link';
import ClientListPage from '@/others/ClientListPage';
import {dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query';
import {getListApi} from '@/others/list-api';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['list'],
    queryFn: ({pageParam}) => getListApi(pageParam),
    initialPageParam: 1
  });

  return (
    <>
      <Link href="/start/next" style={{position: 'fixed', top: 0, background: 'red'}}>Move next page</Link>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ClientListPage />
      </HydrationBoundary>
    </>
  );
}
