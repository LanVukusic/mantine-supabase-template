import { User } from "@supabase/supabase-js";
import { atom } from "nanostores";
import { supabaseClient } from "../supabase/supabaseClient";
import { notifications } from "@mantine/notifications";

export const $currUser = atom<User | null>(null);

supabaseClient.auth.onAuthStateChange((authChangeEvent, session) => {
  $currUser.set(session?.user || null);
  notifications.show({
    title: "Auth state changed",
    message: `User ${authChangeEvent}`,
    color: "blue",
  });
});
