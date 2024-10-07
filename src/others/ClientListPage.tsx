'use client';

import styles from './styles.module.css';
import {useInfiniteQuery} from '@tanstack/react-query';
import {useCallback} from 'react';
import {getListApi} from '@/others/list-api';

export default function ClientListPage() {
  const queryResult = useListQuery();

  const onClick = useCallback(() => {
    if (queryResult.isFetchingNextPage) {
      return;
    }

    queryResult.fetchNextPage();
  }, [queryResult]);

  if (queryResult.isLoading) {
    return (
      <div className={styles.loading}>Loading...</div>
    );
  }

  return (
    <div id="list-selector">
      {queryResult.data?.pages.map(({list}) => list.map(({pk, title}) => (
        <div key={pk} className={styles.box}>
          {title}
        </div>
      )))}
      <button onClick={onClick} style={{width: 100, height: 40, background: 'red'}}>More</button>
    </div>
  );
}

function useListQuery() {
  return useInfiniteQuery({
    queryKey: ['list'],
    queryFn: ({pageParam}) => getListApi(pageParam),
    staleTime: Infinity,
    gcTime: 3000,
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: (_1, _2, lastPageParam) => {
      return lastPageParam + 1;
    }
  });
}
