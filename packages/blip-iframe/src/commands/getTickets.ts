import sendCommand from '../actions/sendCommand';

export default async function getTickets() {
  return await sendCommand<GetTicketsResponse>({
    command: {
      method: 'get',
      to: 'postmaster@desk.msging.net',
      uri: '/tickets',
    },
  });
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
  agentIdentity?: string;
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
