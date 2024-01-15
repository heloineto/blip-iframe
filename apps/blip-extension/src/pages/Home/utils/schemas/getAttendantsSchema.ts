import type { GetAttendantsResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getAttendantsSchema = z.object({
  success: z.boolean(),
  data: z.object({
    total: z.number().optional(),
    itemType: z.string(),
    items: z.array(
      z.object({
        identity: z.string(),
        fullName: z.string(),
        email: z.string(),
        teams: z.array(z.string()),
        status: z.string(),
        isEnabled: z.boolean(),
        agentSlots: z.number().optional(),
        lastServiceDate: z.string().optional(),
      })
    ),
  }),
});

assert<
  Equals<
    z.infer<typeof getAttendantsSchema>,
    {
      success: boolean;
      data: GetAttendantsResponse;
    }
  >
>();
