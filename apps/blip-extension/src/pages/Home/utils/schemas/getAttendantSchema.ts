import type { GetAttendantResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getAttendantSchema = z.object({
  success: z.boolean(),
  data: z.object({
    fullName: z.string(),
    identity: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    photoUri: z.string(),
    timeZoneName: z.string(),
    culture: z.string(),
    extras: z.object({
      lastUsedTenants: z.string(),
      cookies: z.string(),
      acceptedPlugins: z.string(),
    }),
    source: z.string(),
    creationDate: z.string(),
  }),
});

assert<
  Equals<
    z.infer<typeof getAttendantSchema>,
    {
      success: boolean;
      data: GetAttendantResponse;
    }
  >
>();
