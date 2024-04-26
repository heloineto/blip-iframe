// TODO: Document
import { sendCommand } from '../../actions/sendCommand';
import { Sender } from '../../lib';
import { ListParams } from '../../lib/shared/parseListParams';
import { BuildParams, buildURI } from '../../lib/utils/buildURI';

export interface GetEventTrackCategoriesParams extends ListParams, BuildParams {
  categoryFilter?: string;
}

export async function getEventTrackCategories(
  {
    filter,
    skip,
    take,
    categoryFilter,
    ...buildParams
  }: GetEventTrackCategoriesParams = {},
  sender?: Sender
) {
  const uri = buildURI({
    paths: ['event-track'],
    params: {
      $filter: filter,
      $skip: skip,
      $take: take,
      categoryFilter,
    },
    ...buildParams,
  });

  return await sendCommand<GetEventTrackCategoriesResponse>(
    { command: { method: 'get', uri } },
    sender
  );
}

export interface GetEventTrackCategoriesResponse {
  total?: number;
  itemType: string;
  items: GetEventTrackCategoriesItem[];
}

export type GetEventTrackCategoriesItem = {
  category: string;
};
