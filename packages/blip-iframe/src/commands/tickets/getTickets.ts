import { sendCommand } from '../../actions/sendCommand';
import {
  GetListParams,
  parseListParams,
} from '../../lib/shared/parseListParams';
import buildURI from '../../lib/utils/buildURI';

export interface GetTicketsParams extends GetListParams {}

export async function getTickets({ ...listParams }: GetTicketsParams = {}) {
  const uri = buildURI({
    paths: ['tickets'],
    params: parseListParams(listParams),
  });

  return await sendCommand<GetTicketsResponse>({
    command: {
      method: 'get',
      to: 'postmaster@desk.msging.net',
      uri,
    },
  });
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
  status: string;
  storageDate: string;
  openDate: string;
  closeDate: string;
  statusDate: string;
  externalId: string;
  rating: number;
  team: string;
  unreadMessages: number;
  closed: boolean;
  closedBy: string;
  firstResponseDate?: string;
  priority: number;
  isAutomaticDistribution: boolean;
}
