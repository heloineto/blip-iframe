import { sendCommand } from '../../actions/sendCommand';
import { Sender, TO_DESK_URL, buildURI } from '../../lib';

export interface GetBucketsParams {}

export function getBuckets(params: GetBucketsParams, sender?: Sender) {
  const uri = buildURI({
    paths: ['buckets'],
  });

  return sendCommand<unknown>(
    {
      command: {
        method: 'get',
        to: TO_DESK_URL,
        uri,
      },
    },
    sender
  );
}
