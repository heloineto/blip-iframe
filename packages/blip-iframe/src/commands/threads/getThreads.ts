import sendCommand from '../../actions/sendCommand';
import buildURI from '../../lib/utils/buildURI';

export interface GetThreadsParams {
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

export default async function getThreads({
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
}: GetThreadsParams) {
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
      $take: take,
      $skip: skip,
    },
  });

  return await sendCommand<GetThreadsResponse>({
    command: {
      method: 'get',
      uri: uri,
    },
  });
}

export interface GetThreadsResponse {
  total: number;
  itemType: string;
  items: GetThreadsItem[];
}

export interface GetThreadsItem {
  id: string;
  direction: string;
  type: string;
  content: GetThreadsContent | string;
  date: string;
  status?: string;
  metadata?: GetThreadsMetadata;
}

export interface GetThreadsMetadata {
  '#stateName'?: string;
  '#stateId'?: string;
  '#messageId'?: string;
  '#previousStateId'?: string;
  '#previousStateName'?: string;
  '#uniqueId': string;
  '#date_processed': string;
  date_created: string;
  '#tunnel.owner'?: string;
  '#tunnel.originator'?: string;
  '#tunnel.originalFrom'?: string;
  '#tunnel.originalTo'?: string;
  $originator?: string;
  $claims?: string;
  $internalId: string;
  $originatorSessionRemoteNode: string;
  '#messageKind'?: string;
  $elapsedTimeToStorage: string;
  '#messageEmitter'?: string;
}

export interface GetThreadsContent {
  id: string;
  sequentialId: number;
  ownerIdentity: string;
  customerIdentity: string;
  customerDomain: string;
  provider: string;
  status: string;
  storageDate: string;
  externalId: string;
  rating: number;
  team: string;
  unreadMessages: number;
  closed: boolean;
  customerInput: {
    type: string;
    value: string;
  };
  priority: number;
}
