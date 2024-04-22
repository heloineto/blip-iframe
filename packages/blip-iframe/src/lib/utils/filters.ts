export function eq(name: string, value: string | number | undefined) {
  if (!value) return '';
  return `${name} eq ${typeof value === 'string' ? `'${value}'` : value}`;
}

export function or<T extends string | number>(
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
    .map((item) => (getQuery ? getQuery(item) : eq(name, item)))
    .join(' or ')})`;
}

export function and<T extends string | number>(
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
    .map((item) => (getQuery ? getQuery(item) : eq(name, item)))
    .join(' and ')}`;
}

export function date(
  name: string,
  date: Date | null | [Date | null, Date | null] | undefined
) {
  if (!date) return '';

  const [start, end] = Array.isArray(date) ? date : [date, null];

  if (end) {
    end.setUTCHours(23, 59, 59, 999);
  }

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

export function substring(name: string, value: string | number) {
  return `substringof('${value}',${name})`;
}

export function startsWith(name: string, value: string | number) {
  return `startswith(${name},'${value}')`;
}
