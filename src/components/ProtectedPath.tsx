import { useStore } from "@nanostores/react";
import { User } from "@supabase/supabase-js";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { $currUser } from "../global-state/user";

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
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      // use custom validation function
      if (shouldRedirect(user)) {
        navigate(redirectUrl);
      }
    } else {
      if (!user) {
        navigate(redirectUrl);
      }
    }
  }, [user, shouldRedirect, navigate, redirectUrl]);

  return <>{children}</>;
};
