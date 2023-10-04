import { Container, Loader } from '@mantine/core';
import { blip } from 'blip-iframe';
import useBlipQuery from 'pages/Home/queries/useBlipQuery';
import MasterKey from './MasterKey';

export function KeysList() {
  const applicationQuery = useBlipQuery({
    blipFn: () => blip.getApplication(),
    params: undefined,
  });

  if (applicationQuery.isLoading) {
    return <Loader />;
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
      <Container>
        <MasterKey application={application} />
      </Container>
    </div>
  );
}
