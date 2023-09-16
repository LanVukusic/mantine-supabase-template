import { openContextModal } from "@mantine/modals";
import { mantineModals } from "./modals";

export type ModalKeys = keyof typeof mantineModals;
type ReactComponentTypeFromKey<T extends ModalKeys> = (typeof mantineModals)[T];
type ModalProps<T extends ModalKeys> = React.ComponentProps<
  ReactComponentTypeFromKey<T>
>["innerProps"];

type ModalDataInput<T extends ModalKeys> = {
  modal: T;
  title: string;
  body: ModalProps<T>;
};

export function openTypedModal<T extends ModalKeys>(input: ModalDataInput<T>) {
  openContextModal({
    modal: input.modal,
    title: input.title,
    innerProps: {
      ...input.body,
    },
  });
}
