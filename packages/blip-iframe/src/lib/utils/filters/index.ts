export function orFilter<T extends string | number>(
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

export function andFilter<T extends string | number>(
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

  return `${_items
    .map((item) => (getQuery ? getQuery(item) : `${name} eq '${item}'`))
    .join(' and ')}`;
}

export function dateFilter(
  name: string,
  date: Date | null | [Date | null, Date | null] | undefined
) {
  if (!date) return '';

  const [start, end] = Array.isArray(date) ? date : [date, null];

  const startFilter =
    start instanceof Date
      ? `${name} ge datetimeoffset'${start.toISOString()}'`
      : null;
  const endFilter =
    end instanceof Date
      ? `${name} le datetimeoffset'${end.toISOString()}'`
      : null;

  return [startFilter, endFilter].filter(Boolean).join(' and ');
}
