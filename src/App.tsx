import { Toaster } from '@app/ui/blocks/toast';

import TanstackQueryProvider from './providers/TanstackQueryProviders';
import { Routes } from './routes';

function App() {
  return (
    <TanstackQueryProvider>
      <Toaster>
        <Routes />
      </Toaster>
    </TanstackQueryProvider>
  );
}

export default App;
