export interface BuildUriParams {
  paths: string[];
  params: Record<string, string | boolean | number | undefined>;
}

export default function buildUri({ paths, params }: BuildUriParams) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;

    searchParams.append(key, encodeURIComponent(value));
  });

  const slug = paths.filter((path) => !!path).join('/');
  const prefix = slug.startsWith('lime://') ? '' : '/';

  const search = searchParams.toString();

  return `${prefix}${slug}${search ? `?${search}` : ''}`;
}
