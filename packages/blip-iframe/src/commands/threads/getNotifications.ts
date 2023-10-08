import sendCommand from '../../actions/sendCommand';
import buildURI from '../../lib/utils/buildURI';

export interface GetNotificationsParams {
  identity?: string;
  storageDate?: string;
  messageId?: string;
  getFromOriginator?: boolean;
  merged?: boolean;
  ownerIdentity?: string;
  skip?: number;
  take?: number;
  direction?: 'desc' | 'asc';
  refreshExpiredMedia?: boolean;
}

export async function getNotifications({
  messageId,
  identity,
  storageDate,
  getFromOriginator,
  merged,
  ownerIdentity,
  skip,
  take,
  direction = 'desc',
  refreshExpiredMedia = true,
}: GetNotificationsParams) {
  const uri = buildURI({
    prefix:
      ownerIdentity && !getFromOriginator ? `lime://${ownerIdentity}/` : '/',
    paths: [merged ? 'threads-merged' : 'threads', identity],
    params: {
      messageId,
      storageDate,
      getFromOriginator,
      direction,
      refreshExpiredMedia,
      $skip: skip,
      $take: take,
    },
  });

  return await sendCommand<GetNotificationsResponse>({
    command: {
      method: 'get',
      uri: uri,
    },
  });
}

export interface GetNotificationsResponse {
  total: number;
  itemType: string;
  items: unknown[];
}
