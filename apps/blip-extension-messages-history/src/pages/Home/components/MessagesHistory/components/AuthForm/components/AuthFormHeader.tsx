import { DataSecurityOutline } from '@blip-ds/react-icons';
import { Flex, Text, Title, useMantineTheme } from '@mantine/core';

export default function AuthFormHeader() {
  const theme = useMantineTheme();

  return (
    <>
      <div
        style={{
          height: 80,
          width: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[7]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
        }}
      >
        <DataSecurityOutline size={50} />
      </div>
      <Flex direction="column">
        <Title order={2} size="h3" ta="center">
          Insert Bot Key
        </Title>
        <Text c="dimmed" ta="center">
          To see it&apos;s messages history
        </Text>
      </Flex>
    </>
  );
}
