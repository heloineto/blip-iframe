import { TicketStatuses } from './constants';

export interface GetTicketFilters {
  status?: (TicketStatuses | (string & {}))[];
  /** Filters by one or more attendant identities */
  attendant?: string | string[];
  /** Filters by one or more contact identities */
  contact?: string | string[];
  /** Filters by the date the ticket was saved on the database */
  storageDate?: {
    /** The start date range */
    start: Date;
    /** The end date of the range */
    end: Date;
  };
  /** Filters by one or more the ticket's sequential id */
  sequentialId?: number | number[];
  /** Filters by one or more of the queues the ticket may be in */
  team?: string | string[];
}

function orFilter<T>(
  name: string,
  items: T | T[] | undefined,
  {
    getQuery,
  }: {
    getQuery?: (item: T) => string;
  } = {}
) {
  if (!items) return '';

  const _items = Array.isArray(items) ? items : [items];
  if (_items.length === 0) return '';

  return `(${_items
    .map((item) => (getQuery ? getQuery(item) : `${name} eq '${item}'`))
    .join(' or ')})`;
}

export function getTicketsFilters({
  status,
  storageDate,
  attendant,
  contact,
  sequentialId,
  team,
}: GetTicketFilters) {
  const attendantFilter = orFilter('AgentIdentity', attendant);
  const teamFilter = orFilter('Team', team);
  const sequentialIdFilter = orFilter('SequentialId', sequentialId);
  const contactFilter = orFilter('CustomerIdentity', contact, {
    getQuery: (item) => `substringof('${item}',CustomerIdentity)`,
  });
  const statusFilter = status?.map((s) => `status eq '${s}'`).join(' and ');
  const storageDateFilter = !storageDate
    ? ''
    : `storageDate ge datetimeoffset'${storageDate.start.toISOString()}' and storageDate le datetimeoffset'${storageDate.end.toISOString()}'`;

  const filters = [
    teamFilter,
    statusFilter,
    storageDateFilter,
    attendantFilter,
    contactFilter,
    sequentialIdFilter,
  ]
    .filter(Boolean)
    .join(' and ');

  return filters;
}
