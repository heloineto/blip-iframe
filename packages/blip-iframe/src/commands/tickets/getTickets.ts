import { sendCommand } from '../../actions/sendCommand';
import { DESK_POSTMASTER_URL, Sender } from '../../lib';
import { ListParams } from '../../lib/shared/parseListParams';
import { buildURI } from '../../lib/utils/buildURI';
import { TicketStatus } from './utils';

export interface GetTicketsParams extends ListParams {}

/**
 * Gets the tickets (as in the support tickets shown by Blip Desk)
 * @param params - The parameters for the function
 * @returns
 */
export async function getTickets(
  { filter, skip, take }: GetTicketsParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['tickets'],
    params: {
      $filter: filter || undefined,
      $skip: skip,
      $take: take,
    },
  });

  return await sendCommand<GetTicketsResponse>(
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

export interface GetTicketsResponse {
  total: number;
  itemType: string;
  items: GetTicketsItem[];
}

export interface GetTicketsItem {
  id: string;
  sequentialId: number;
  ownerIdentity: string;
  customerIdentity: string;
  customerDomain: string;
  agentIdentity: string;
  provider: string;
  status: TicketStatus;
  storageDate: string;
  openDate: string;
  statusDate: string;
  externalId: string;
  rating: number;
  team: string;
  unreadMessages: number;
  closed: boolean;
  priority: number;
  isAutomaticDistribution: boolean;
  distributionType?: string;
  closeDate?: string;
  closedBy?: string;
  firstResponseDate?: string;
}
