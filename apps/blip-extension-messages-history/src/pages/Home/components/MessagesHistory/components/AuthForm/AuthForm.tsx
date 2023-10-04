import { Button, Divider, Stack, Text, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';
import AuthFormHeader from './components/AuthFormHeader';

interface Props {
  onSubmit: (values: { botKey: string }) => void;
}

export function AuthForm({ onSubmit }: Props) {
  const form = useForm({
    initialValues: {
      botKey: '',
    },
  });

  return (
    <Stack style={{ flex: 1 }} align="center">
      <AuthFormHeader />
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 15,
          width: '100%',
        }}
        onSubmit={form.onSubmit(onSubmit)}
      >
        <Textarea minRows={5} maxRows={5} {...form.getInputProps('botKey')} />
        <Button type="submit">Set Bot Key</Button>
      </form>
      <Divider />
      <Text c="dimmed" size="sm">
        You can get the bot key inside the Blip Portal (Messages History
        Extension). If you are not the owner of the bot, ask the owner to give
        you this key.
      </Text>
    </Stack>
  );
}
