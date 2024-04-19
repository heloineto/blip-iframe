import type { GetTeamsResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getTeamsSchema = z.object({
  success: z.boolean(),
  data: z.object({
    total: z.number().optional(),
    itemType: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
      })
    ),
  }),
});

assert<
  Equals<
    z.infer<typeof getTeamsSchema>,
    {
      success: boolean;
      data: GetTeamsResponse;
    }
  >
>();
