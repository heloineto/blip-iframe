import { sendCommand } from '../../actions';

// TODO: Fix, this does not work
export default async function getAttendants() {
  return await sendCommand<GetAttendantsResponse>({
    destination: 'BlipService',
    command: {
      method: 'get',
      to: 'postmaster@desk.blip.ai',
      uri: '/attendants',
    },
  });
}

export type GetAttendantsResponse = unknown;
