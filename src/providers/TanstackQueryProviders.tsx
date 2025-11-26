import type { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClientConfig } from '@app/lib/react-query';

const TanstackQueryProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClientConfig}>{children}</QueryClientProvider>;
};

export default TanstackQueryProvider;
