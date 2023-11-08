import { createTRPCReact, httpBatchLink } from '@trpc/react-query'
import type { AppRouter } from '../../../backend/src/router'
import { Suspense, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const trpc = createTRPCReact<AppRouter>();

type TRPCProviderProps = {
  children?: React.ReactNode
}

export const TRPCProvider = ({ children }: TRPCProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:5000',
        }),
      ],
    }),
  );


  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          {children}
        </Suspense>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
