import { User } from "@supabase/supabase-js";
import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { $currUser } from "../global-state/user";
import { useStore } from "@nanostores/react";

interface ProtectedPathProps extends PropsWithChildren {
  redirectUrl: string;
  validator?: (arg0: User | null) => boolean;
}

export const ProtectedPath = ({
  children,
  redirectUrl,
  validator,
}: ProtectedPathProps) => {
  const user = useStore($currUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (validator) {
      // use custom validation function
      if (validator(user)) {
        navigate(redirectUrl);
      }
    } else {
      if (!user) {
        navigate(redirectUrl);
      }
    }
  }, [user, validator, navigate, redirectUrl]);

  return <>{user != null && children}</>;
};
