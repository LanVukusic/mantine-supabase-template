import { Button, Container, Title, Text, Stack, Code } from '@mantine/core';

export const Welcome = () => {
  return (
    <Container m="xl">
      <Title>Mantine + Supabase Template</Title>

      <Text c="dimmed" size="sm" mb="lg">
        A batteries-included starter template.
      </Text>

      <Stack>
        <div>
          <Text fw={700}>Theme</Text>
          <Text size="sm">
            Located at <Code>src/mantine/theme.ts</Code>.
          </Text>
        </div>

        <div>
          <Text fw={700}>Router</Text>
          <Text size="sm">
            Located at <Code>src/router/router.tsx</Code>.
          </Text>
        </div>

        <div>
          <Text fw={700}>Global State (Nanostores)</Text>
          <Text size="sm">
            Store defined at <Code>src/global-state/user.ts</Code> using
            nanostores <Code>atom()</Code>.
          </Text>
          <Text size="sm">
            Read: <Code>{'const user = useStore($currUser)'}</Code>
            {' — '}
            Write: <Code>{'$currUser.set(newValue)'}</Code>
          </Text>
        </div>

        <div>
          <Text fw={700}>SWR Data Fetching (useSupaWR)</Text>
          <Text size="sm">
            Wrapper at <Code>src/supabase/supa-utils/supaSWR.ts</Code>. Fetch
            data in any component with auto-caching and revalidation:
          </Text>
          <Code block>
            {`import { getSupaWR } from '../../supabase/supa-utils/supaSWR';
import { supabaseClient } from '../../supabase/supabaseClient';

const ProfileList = () => {
  const { data, error, isLoading } = getSupaWR({
    table: 'profiles',
    query: () =>
      supabaseClient.from('profiles').select('*'),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};`}
          </Code>
          <Text size="sm" mt="xs">
            After a mutation, invalidate the cache with{' '}
            <Code>refetchTables</Code> from{' '}
            <Code>src/supabase/supa-utils/supaSWRCache.ts</Code>:
          </Text>
          <Code block>
            {`import { refetchTables } from '../../supabase/supa-utils/supaSWRCache';

await supabaseClient.from('profiles').insert({ name: 'New' });
refetchTables('profiles');`}
          </Code>
        </div>
      </Stack>

      <Text mt="lg" mb="sm">
        Make sure to populate the <b>.env</b>
      </Text>

      <pre>VITE_SUPABASE_ANON_KEY="change-me"</pre>
      <pre>VITE_SUPABASE_URL="http://change-me"</pre>

      <Stack mt="lg">
        <Button component="a" href="/supabase-test">
          supabase test
        </Button>

        <Button component="a" href="/supabase-test-protected">
          supabase test - auth protected
        </Button>
      </Stack>
    </Container>
  );
};
