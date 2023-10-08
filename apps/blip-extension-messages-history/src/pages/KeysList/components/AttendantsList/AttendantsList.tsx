import { Text, Title, useMantineTheme } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import type { GetAttendantsItem } from 'blip-iframe';
import { blip } from 'blip-iframe';
import { DataTable } from 'mantine-datatable';
import blipQueryFn from 'pages/Home/utils/queryFn';

interface Props {
  selectedAttendant: GetAttendantsItem | null;
  setSelectedAttendant: React.Dispatch<
    React.SetStateAction<GetAttendantsItem | null>
  >;
}

export function AttendantsList({
  selectedAttendant,
  setSelectedAttendant,
}: Props) {
  const theme = useMantineTheme();
  const attendantsQuery = useQuery({
    queryKey: ['attendants'],
    queryFn: () => blipQueryFn(blip.getAttendants()),
  });

  if (attendantsQuery.error) {
    return <div>Erro ao carregar atendentes</div>;
  }

  const attendants = attendantsQuery.data?.items ?? [];

  return (
    <div>
      <Title order={2} size="h3">
        Atendentes
      </Title>
      <Text mb="md">
        Selecione um(a) atendente para criar uma chave que dê acesso apenas as
        mensagens dele/dela. Se nenhum atendente for selecionado, a chave dará
        acesso a todas as mensagens.
      </Text>
      <DataTable
        minHeight={200}
        withBorder
        borderRadius="sm"
        fetching={attendantsQuery.isLoading}
        striped
        records={!attendantsQuery.isLoading ? attendants : []}
        columns={[
          {
            accessor: 'fullName',
            ellipsis: true,
          },
          { accessor: 'email' },
          {
            accessor: 'status',
            textAlignment: 'right',
          },
        ]}
        onRowClick={(record) => {
          if (record.identity === selectedAttendant?.identity) {
            setSelectedAttendant(null);
            return;
          }

          setSelectedAttendant(record);
        }}
        rowStyle={(record) =>
          selectedAttendant?.identity === record.identity
            ? {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.blue[8]
                    : theme.colors.blue[4],
                cursor: 'pointer',
              }
            : undefined
        }
        idAccessor="identity"
      />
    </div>
  );
}
