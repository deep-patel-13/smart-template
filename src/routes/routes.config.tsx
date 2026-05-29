import { createBrowserRouter, type RouteObject } from 'react-router';

import { Routes } from '@app/constants/route.constant';
import { Home } from '@app/page/home';

const appRoutes: RouteObject[] = [
  {
    path: Routes.Root,
    // element: <AuthProvider /> ,
    // errorElement: <ErrorBoundary />,
    children: [
      // { index: true, element: <Navigate to={} /> }
      { index: true, element: <Home /> },
      // { path: '*', element: <div>404 not found component goes here</div> },
    ],
  },
];

const router = createBrowserRouter(appRoutes);

export { router };
