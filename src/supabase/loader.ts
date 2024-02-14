import { notifications } from "@mantine/notifications";
import { supabaseClient } from "./supabaseClient";
import { redirect } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import { useState, useEffect } from "react";

export async function protectedPathLoader() {
  const user = await supabaseClient.auth.getUser();
  if (user.error) {
    notifications.show({
      title: user.error.name,
      message: user.error.message,
      color: "red",
    });
    return null;
  }

  if (!user.data.user) {
    redirect("/auth");
  }
  return null;
}

export const useUser = () => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    supabaseClient.auth.getUser().then((user) => {
      setUser(user.data?.user || undefined);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    supabaseClient.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session?.user);
      }
      if (event === "SIGNED_OUT") {
        setUser(undefined);
      }
      setLoading(false);
    });
  }, []);

  return { user, loading };
};
