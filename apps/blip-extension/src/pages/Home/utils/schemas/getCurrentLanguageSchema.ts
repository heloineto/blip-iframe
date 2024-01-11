import type { GetCurrentLanguageResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getCurrentLanguageSchema = z.object({
  success: z.boolean(),
  data: z.string(),
});

assert<
  Equals<
    z.infer<typeof getCurrentLanguageSchema>,
    {
      success: boolean;
      data: GetCurrentLanguageResponse;
    }
  >
>();
