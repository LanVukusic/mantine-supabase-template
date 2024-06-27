import { Button, Stack } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';

export const Test2 = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalPrice: number }>) => {
  return (
    <Stack>
      {innerProps.modalPrice}
      {id}
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
