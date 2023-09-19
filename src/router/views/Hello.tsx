import { Badge, Button, Group, Paper, Stack } from "@mantine/core";
import { openTypedModal } from "../../mantine/modals/modals-utils";
import { notifications } from "@mantine/notifications";
import { spotlight } from "@mantine/spotlight";
import { useStore } from "@nanostores/react";
import { $currUser } from "../../global-state/user";
import { supabaseClient } from "../../supabase/supabase";

function App() {
  const user = useStore($currUser);

  return (
    <Stack>
      <Paper p="xl">
        <Group>
          <Stack>
            <Badge variant="light">{user?.id}</Badge>
            <Button
              onClick={() => {
                supabaseClient.auth.signOut();
              }}
            >
              logout
            </Button>
          </Stack>
          <Button
            onClick={() => {
              spotlight.open();
            }}
          >
            Open spotlight
          </Button>
          <Button
            onClick={() => {
              notifications.show({
                message: "im a notif",
              });
            }}
          >
            Push notification
          </Button>
          <Button
            onClick={() => {
              openTypedModal({
                modal: "testName",
                title: "test name modal",
                body: {
                  modalBody: "ojla",
                },
              });
            }}
          >
            Open modal
          </Button>
        </Group>
      </Paper>
    </Stack>
  );
}

export default App;
