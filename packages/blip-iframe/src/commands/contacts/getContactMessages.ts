import { sendCommand } from '../../actions';
import {
  BuildParams,
  buildURI,
  ListParams,
  Sender,
  TO_DESK_URL,
} from '../../lib';

export interface GetMessagesParams extends ListParams, BuildParams {
  ticketId: string;
}

/**
 * Gets the messages of a ticket
 * @param params - The parameters for the function
 * @returns
 */
export async function getMessages(
  { ticketId, filter, take, skip, ...buildSearchParams }: GetMessagesParams,
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['tickets', ticketId, 'messages'],
    params: {
      $filter: filter,
      $take: take,
      $skip: skip,
    },
    ...buildSearchParams,
  });

  return await sendCommand<GetMessagesResponse>(
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

export interface GetMessagesResponse {
  total: number;
  itemType: string;
  items: GetMessagesItem[];
}

export interface GetMessagesItem {
  id: string;
  direction: string;
  type: string;
  content: GetMessagesContent | string;
  date: string;
  status?: string;
  metadata?: GetMessagesMetadata;
}

export interface GetMessagesMetadata {
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

export interface GetMessagesContent {
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
