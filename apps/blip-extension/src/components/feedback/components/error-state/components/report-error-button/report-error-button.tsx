import type { ButtonProps } from '@mantine/core';
import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReportErrorForm } from './components/report-error-form';

export interface ReportErrorButtonProps extends ButtonProps {
  error: unknown;
}

export function ReportErrorButton({ error, ...rest }: ReportErrorButtonProps) {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <Button onClick={open} type="button" variant="light" {...rest}>
        Reportar
      </Button>
      <Modal
        onClose={close}
        opened={opened}
        size="lg"
        styles={{
          header: { height: 0 },
          close: { marginTop: 20 },
        }}
      >
        <ReportErrorForm error={error} onClose={close} />
      </Modal>
    </>
  );
}
