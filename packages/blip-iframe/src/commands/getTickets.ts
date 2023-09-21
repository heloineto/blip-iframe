import { IframeMessageProxy } from 'iframe-message-proxy';

export default async function getTickets() {
  try {
    const { response } = (await IframeMessageProxy.sendMessage({
      action: 'sendCommand',
      content: {
        command: {
          method: 'get',
          to: 'postmaster@desk.msging.net',
          uri: '/tickets',
        },
      },
    })) as WrappedGetTicketsResponse;

    return { response, error: null };
  } catch (error) {
    return { response: null, error };
  }
}

export interface WrappedGetTicketsResponse {
  response: GetTicketsResponse;
  trackingProperties: { id: string };
}

export interface GetTicketsResponse {
  total: number;
  itemType: string;
  items: GetTicketsResponseItem[];
}

export interface GetTicketsResponseItem {
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
