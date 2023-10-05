import buildSearchParams from './buildSearchParams';

export interface buildURIParams {
  paths: (string | undefined)[];
  params?: Record<string, string | boolean | number | undefined>;
  prefix?: string;
}

export default function buildURI({
  paths,
  params,
  prefix = '/',
}: buildURIParams) {
  const searchParams = buildSearchParams(params);
  const slug = (paths.filter((path) => !!path) as string[])
    .map((path) => encodeURIComponent(path))
    .join('/');

  return `${prefix}${slug}${searchParams}`;
}
