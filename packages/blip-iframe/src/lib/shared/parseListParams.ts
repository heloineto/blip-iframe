export interface GetListParams {
  filter?: string;
  skip?: number;
  take?: number;
}

export function parseListParams({ filter, take, skip }: GetListParams) {
  return {
    $filter: filter,
    $skip: skip,
    $take: take,
  };
}
