import { buildSearchParams } from './buildSearchParams';

export interface BuildURIParams {
  paths: (string | undefined)[];
  params?: Record<string, string | boolean | number | undefined>;
  prefix?: string;
}

export type BuildParams = Partial<BuildURIParams>;

export function buildURI({ paths, params, prefix = '/' }: BuildURIParams) {
  const searchParams = buildSearchParams(params);

  const slug = (paths.filter((path) => !!path) as string[])
    .map((path) => encodeURIComponent(path))
    .join('/');

  return `${
    prefix.endsWith('/') ? prefix : `${prefix}/`
  }${slug}${searchParams}`;
}
