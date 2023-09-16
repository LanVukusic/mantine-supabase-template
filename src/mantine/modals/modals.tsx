import { Badge, Button, Stack } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";

const Test = ({
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

const Test2 = ({
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

export const mantineModals = {
  testName: Test,
  test2name: Test2,
} as const;
