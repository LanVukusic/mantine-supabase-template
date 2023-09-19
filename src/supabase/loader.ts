import { notifications } from "@mantine/notifications";
import { supabaseClient } from "./supabase";
import { redirect } from "react-router-dom";

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
