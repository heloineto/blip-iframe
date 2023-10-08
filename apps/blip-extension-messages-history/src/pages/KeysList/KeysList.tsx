import { Center, Container, Loader } from '@mantine/core';
import { blip } from 'blip-iframe';
import useBlipQuery from 'pages/Home/queries/useBlipQuery';
import MasterKey from './MasterKey';

export function KeysList() {
  const applicationQuery = useBlipQuery({
    blipFn: blip.getApplication,
    params: undefined,
  });

  if (applicationQuery.isLoading) {
    return (
      <Center
        style={{
          height: '100vh',
          width: '100vw',
        }}
      >
        <Loader />
      </Center>
    );
  }

  if (applicationQuery.error || !applicationQuery.data) {
    return <div>Erro ao buscar aplicação</div>;
  }

  const application = applicationQuery.data;

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Container size="xl" style={{ display: 'flex' }}>
        <MasterKey application={application} />
      </Container>
    </div>
  );
}
