import { Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import type { GetAttendantsItem } from 'blip-iframe';
import { blip } from 'blip-iframe';
import { DataTable } from 'mantine-datatable';
import blipQueryFn from 'pages/Home/utils/queryFn';
import { useEffect, useState } from 'react';

interface Props {
  selectedAttendant: GetAttendantsItem | null;
  setSelectedAttendant: React.Dispatch<
    React.SetStateAction<GetAttendantsItem | null>
  >;
}

const PAGE_SIZE = 10;

export function AttendantsTable({
  selectedAttendant,
  setSelectedAttendant,
}: Props) {
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState<GetAttendantsItem[] | null>(null);

  const theme = useMantineTheme();
  const attendantsQuery = useQuery({
    queryKey: ['attendants'],
    queryFn: () => blipQueryFn(blip.getAttendants()),
    onSuccess: (response) => {
      if (!response) return;

      setRecords(response.items.slice(0, PAGE_SIZE));
    },
  });

  useEffect(() => {
    if (!attendantsQuery.data?.items) return;

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(attendantsQuery.data.items.slice(from, to));
  }, [attendantsQuery.data?.items, page]);

  if (attendantsQuery.error) {
    return <div>Erro ao carregar atendentes</div>;
  }

  return (
    <Stack spacing="md">
      <Stack h={81} spacing={0}>
        <Title order={2} size="h3">
          Atendentes
        </Title>
        <Text>
          Selecione um(a) atendente para criar uma chave que dê acesso apenas as
          mensagens dele/dela. Se nenhum atendente for selecionado, a chave dará
          acesso a todas as mensagens.
        </Text>
      </Stack>
      <DataTable
        minHeight={200}
        withBorder
        borderRadius="sm"
        fetching={attendantsQuery.isLoading}
        striped
        records={records ?? []}
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
        totalRecords={attendantsQuery.data?.total ?? 0}
        recordsPerPage={PAGE_SIZE}
        page={page}
        onPageChange={(p) => setPage(p)}
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
    </Stack>
  );
}
