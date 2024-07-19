import { Badge, Button, Group, Paper, Stack, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { spotlight } from '@mantine/spotlight';
import { useStore } from '@nanostores/react';
import { $currUser } from '../../global-state/user';
import { openTypedModal } from '../../mantine/modals/modals-utils';
import { supabaseClient } from '../../supabase/supabaseClient';

function App() {
  const user = useStore($currUser);

  return (
    <Stack>
      <Paper p="xl">
        <Group>
          <Paper
            withBorder
            shadow="lg"
            p="md"
            style={{
              cursor: 'pointer',
            }}
            onClick={() => {
              window.location.replace('https://supabase.com/');
            }}
          >
            <Group>
              <img
                style={{
                  width: '100px',
                }}
                src="https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png"
              />
              <Text size="xl" c="dimmed">
                Built with supabase
              </Text>
            </Group>
          </Paper>
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
                message: 'im a notif',
              });
            }}
          >
            Push notification
          </Button>
          <Button
            onClick={() => {
              openTypedModal({
                modal: 'testName',
                title: 'test name modal',
                body: {
                  modalBody: 'ojla',
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
