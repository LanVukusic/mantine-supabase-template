import { Badge, Button, Stack } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';

export const Test = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string }>) => {
  return (
    <Stack>
      {innerProps.modalBody}
      <Badge>{id}</Badge>
      <Button
        onClick={() => {
          context.closeModal(id);
        }}
      >
        close
      </Button>
    </Stack>
  );
};
