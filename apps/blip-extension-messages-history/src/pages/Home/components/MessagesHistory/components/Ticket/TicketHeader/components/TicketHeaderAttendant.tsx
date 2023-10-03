import { Loader } from '@mantine/core';
import useAttendant from '../../../../../../queries/useAttendant';
import TicketHeaderAttendantInner from './TicketHeaderAttendantInner';

interface Props {
  attendantId: string;
}

export default function TicketHeaderAttendant({ attendantId }: Props) {
  const attendantQuery = useAttendant({ params: { identity: attendantId } });

  if (attendantQuery.isLoading) {
    return <Loader />;
  }

  if (attendantQuery.isError || !attendantQuery.data) {
    return <div>Error fetching attendant</div>;
  }

  const attendant = attendantQuery.data;

  return (
    <TicketHeaderAttendantInner
      avatar={attendant.photoUri}
      name={attendant.fullName ?? attendant.identity ?? 'N/A'}
    />
  );
}
