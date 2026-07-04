import { createBrowserRouter } from 'react-router-dom';
import { ProtectedPath } from '../components/ProtectedPath';
import { Authentication } from '../views/Auth';
import App from '../views/Main/App';
import { AppLayout } from '../views/Main/AppLayout';
import { Welcome } from '../views/Main/Welcome';

export const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  {
    path: '/supabase-test',
    element: (
      <ProtectedPath redirectUrl="/auth">
        <AppLayout />
      </ProtectedPath>
    ),
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: '/supabase-test-protected',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },

  {
    path: '/auth',
    element: <Authentication />,
  },
]);
