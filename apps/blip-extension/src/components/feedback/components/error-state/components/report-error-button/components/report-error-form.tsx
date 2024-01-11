'use client';

import { Button, Flex, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { SmileySad } from '@phosphor-icons/react/dist/ssr';
import { serializeError } from 'serialize-error';
import classes from './report-error-form.module.css';

export interface ReportErrorFormProps {
  onClose: () => void;
  error: unknown;
}

// FUTURE: Implement report error form
export function ReportErrorForm(props: ReportErrorFormProps) {
  // const { model: user } = useAuth<{ id: string }>();
  const { error, onClose } = props;

  // const mutation = useCreateMutation({
  //   collection: 'errors',
  //   ...notificationProps({
  //     successMessage: 'Error reported! Thank you for your time.',
  //   }),
  // });

  const form = useForm({
    initialValues: {
      allowCommunication: true,
      // user: user.id,
      error: serializeError(error),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(() => {
        // mutation.mutate({ bodyParams: values });
        onClose();
      })}
    >
      <Flex gap="md">
        <Flex
          align="center"
          className={classes.icon}
          h={50}
          justify="center"
          style={{
            flexShrink: 0,
            borderRadius: 999,
          }}
          w={50}
        >
          <SmileySad size={32} />
        </Flex>
        <Flex direction="column">
          <Title order={2} size="h5">
            Pedimos desculpas pelo inconveniente.
          </Title>
          <Text c="dimmed" mt={4} size="sm">
            Por favor, ajude-nos a corrigir este erro, reportando-o aos nossos
            desenvolvedores.
          </Text>
        </Flex>
      </Flex>
      <Flex gap="md" justify="end" mt="lg">
        <Button onClick={onClose} type="button" variant="light">
          Cancelar
        </Button>
        <Button type="submit">Reportar erro</Button>
      </Flex>
    </form>
  );
}
