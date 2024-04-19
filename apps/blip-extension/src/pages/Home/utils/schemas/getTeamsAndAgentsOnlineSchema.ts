import type { GetTeamsAndAgentsOnlineResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getTeamsAndAgentsOnlineSchema = z.object({
  success: z.boolean(),
  data: z.object({
    total: z.number().optional(),
    itemType: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        agentsOnline: z.number(),
      })
    ),
  }),
});

assert<
  Equals<
    z.infer<typeof getTeamsAndAgentsOnlineSchema>,
    {
      success: boolean;
      data: GetTeamsAndAgentsOnlineResponse;
    }
  >
>();
