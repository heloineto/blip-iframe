export default function buildSearchParams(
  params?: Record<string, string | boolean | number | undefined>
) {
  if (!params) return '';

  let strParams = '';
  const entries = Object.entries(params);

  for (let index = 0; index < entries.length; index++) {
    const [key, value] = entries[index];

    if (value === undefined) continue;

    const pre = index === 0 ? '?' : '&';

    strParams = `${strParams}${pre}${key}=${encodeURIComponent(value)}`;
  }

  return strParams;
}
