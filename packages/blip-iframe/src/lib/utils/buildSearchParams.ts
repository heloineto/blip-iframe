export default function buildSearchParams(
  params?: Record<string, string | boolean | number | undefined>
) {
  if (!params) return '';

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;

    // append "encodeURIComponent" encodes the key and value.
    // Make sure parameters like $take=x are fine with it.
    searchParams.append(key, encodeURIComponent(value));
  });

  const strParams = searchParams.toString();

  return strParams ? `?${strParams}` : '';
}
