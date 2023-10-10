import { Button, Group, Stack, Textarea, Title } from '@mantine/core';
import { blip } from 'blip-iframe';
import copyToClipboard from 'copy-to-clipboard';

interface Props {
  masterKey: string | undefined;
}

export function BotKeyDisplay({ masterKey }: Props) {
  return (
    <Stack spacing="md">
      <Stack spacing={0} h={81}>
        <Title order={2} size="h3">
          Chave criptografada
        </Title>
        <div>
          Copie a chave abaixo e insira na extensão de Message History no Desk
          para visualizar as mensagens.
        </div>
      </Stack>
      <Stack w="100%">
        <Textarea readOnly value={masterKey} w="100%" autosize maxRows={10} />
        <Group position="right">
          <Button
            onClick={() => {
              if (!masterKey) return;
              copyToClipboard(masterKey);
              void blip.toast({
                title: 'Code copied!',
                message: 'The code was copied to your clipboard',
                type: 'success',
              });
            }}
          >
            Copy key
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
}
