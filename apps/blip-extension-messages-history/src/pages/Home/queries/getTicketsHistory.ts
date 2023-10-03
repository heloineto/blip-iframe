import { buildURI, sendCommand } from 'blip-iframe';

export interface GetTicketsHistory {
  filter?: string;
  skip?: number;
  take?: number;
}

export default async function getTicketsHistory({
  filter,
  skip,
  take,
}: GetTicketsHistory = {}) {
  const uri = buildURI({
    paths: ['tickets', 'history'],
    params: { $filter: filter, $skip: skip, $take: take },
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
