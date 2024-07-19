import { Box, Group, Stack, Title } from '@mantine/core';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Stack>
      <Group>
        <Title>MantineSupabase-t</Title>
      </Group>
      <Box flex={1}>
        <Outlet />
      </Box>
    </Stack>
  );
};
