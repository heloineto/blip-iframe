export interface GetListParams {
  /**
   * OData filter (see https://docs.microsoft.com/en-us/odata/concepts/queryoptions-overview#filter)
   */
  filter?: string;
  /**
   * OData skip (see https://learn.microsoft.com/en-us/odata/concepts/queryoptions-overview)
   */
  skip?: number;
  /**
   * OData take (see https://learn.microsoft.com/en-us/odata/concepts/queryoptions-overview)
   */
  take?: number;
}

export function parseListParams({ filter, take, skip }: GetListParams) {
  return {
    $filter: filter || undefined,
    $skip: skip,
    $take: take,
  };
}
