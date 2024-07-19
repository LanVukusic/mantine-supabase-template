import { createBrowserRouter } from 'react-router-dom';
import { ProtectedPath } from '../components/ProtectedPath';
import { Authentication } from '../views/Auth';
import App from '../views/Main/App';
import { AppLayout } from '../views/Main/AppLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedPath redirectUrl="/auth">
        <AppLayout />
      </ProtectedPath>
    ),
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },

  {
    path: '/auth',
    element: <Authentication />,
  },
]);
