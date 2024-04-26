import { buildSearchParams } from './buildSearchParams';

export interface BuildURIParams {
  /** The paths to be concatenated in the URI */
  paths: (string | undefined)[];
  /** The query parameters to be added to the URI */
  params?: Record<string, string | boolean | number | undefined>;
  /** The prefix of the URI, usually something like `lime://<node-id>` */
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
