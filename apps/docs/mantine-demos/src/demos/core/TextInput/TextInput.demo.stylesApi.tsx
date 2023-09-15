import { TextInputStylesApi } from '@/mantine-styles-api';
import { TextInput, rem } from '@mantine/core';
import { MantineDemo } from '@mantine/ds';
import { IconAt } from '@tabler/icons-react';

const code = `
import { IconAt } from '@tabler/icons-react';
import { TextInput, rem } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
`;

function Demo(props: any) {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {...props}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: TextInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
