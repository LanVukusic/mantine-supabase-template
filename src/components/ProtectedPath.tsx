import { useStore } from '@nanostores/react';
import { User } from '@supabase/supabase-js';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { $currUser } from '../global-state/user';

interface ProtectedPathProps extends PropsWithChildren {
  redirectUrl: string;
  shouldRedirect?: (arg0: User | null) => boolean;
}

export const ProtectedPath = ({
  children,
  redirectUrl,
  shouldRedirect,
}: ProtectedPathProps) => {
  const user = useStore($currUser);

  if (shouldRedirect ? shouldRedirect(user) : user == null) {
    return <Navigate to={redirectUrl} />;
  }

  return <>{children}</>;
};
