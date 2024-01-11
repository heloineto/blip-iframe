import type { GetAccountResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getAccountSchema = z.object({
  success: z.boolean(),
  data: z.object({
    fullName: z.string(),
    alternativeAccount: z.string(),
    identity: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    photoUri: z.string(),
    timeZoneName: z.string(),
    culture: z.string(),
    creationDate: z.string(),
  }),
});

assert<
  Equals<
    z.infer<typeof getAccountSchema>,
    {
      success: boolean;
      data: GetAccountResponse;
    }
  >
>();
