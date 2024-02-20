import { sendCommand } from '../../actions/sendCommand';
import { DESK_POSTMASTER_URL, Sender, buildURI } from '../../lib';

// {"id":"67ec4b32-6e3d-431c-a3a2-fdc8ceb93a11","method":"get","to":"postmaster@desk.msging.net","uri":"/tickets/active","metadata":{"server.shouldStore":"true"}}

export interface GetBucketsParams {}

export function getBuckets(params: GetBucketsParams, sender?: Sender) {
  const uri = buildURI({
    paths: ['buckets'],
  });

  return sendCommand<unknown>(
    {
      command: {
        method: 'get',
        to: DESK_POSTMASTER_URL,
        uri,
      },
    },
    sender
  );
}
