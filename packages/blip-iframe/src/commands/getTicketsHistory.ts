import { sendCommand } from '../actions';
import { buildUri } from '../lib/utils';

export interface GetTicketsHistory {
  skip?: number;
  take?: number;
}

export default async function getTicketsHistory({
  skip,
  take,
}: GetTicketsHistory = {}) {
  const uri = buildUri({
    paths: ['tickets', 'history'],
    params: { $skip: skip, $take: take },
  });

  return await sendCommand<GetTicketsHistoryResponse>({
    command: {
      method: 'get',
      to: 'postmaster@desk.msging.net',
      uri: uri,
    },
  });
}

export interface GetTicketsHistoryResponse {
  total: number;
  itemType: string;
  items: {
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
  }[];
}
