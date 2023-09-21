export interface BuildUriParams {
  paths: string[];
  params: Record<string, string | boolean | undefined>;
}

export default function buildUri({ paths, params }: BuildUriParams) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;

    searchParams.append(key, encodeURIComponent(value));
  });

  const slug = paths.join('/');
  const prefix = slug.startsWith('lime://') ? '' : '/';

  return `${prefix}${slug}?${searchParams.toString()}`;
}
