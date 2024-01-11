import type { GetTokenResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getTokenSchema = z.object({
  success: z.boolean(),
  data: z.string(),
});

assert<
  Equals<
    z.infer<typeof getTokenSchema>,
    {
      success: boolean;
      data: GetTokenResponse;
    }
  >
>();
