import { IframeMessageProxy } from 'iframe-message-proxy';
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

  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        command: {
          method: 'get',
          to: 'postmaster@desk.msging.net',
          uri: uri,
        },
      },
    })) as WrappedGetTicketsHistoryResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetTicketsHistoryResponse {
  response: GetTicketsHistoryResponse;
  trackingProperties: { id: string };
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
