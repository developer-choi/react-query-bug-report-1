'use client';

import {PropsWithChildren} from 'react';
import {QueryClientProvider} from '@tanstack/react-query';
import {getQueryClient} from '@/others/react-query';

export default function Layout({children}: PropsWithChildren) {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
