import type { GetContactsResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().optional(),
  group: z.string().optional(),
  lastMessageDate: z.string(),
  lastUpdateDate: z.string(),
  identity: z.string(),
  extras: z.record(z.unknown()).optional(),
  source: z.string(),
  city: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  culture: z.string().optional(),
  photoUri: z.string().optional(),
  timeZoneName: z.string().optional(),
});

export const getContactsSchema = z.object({
  success: z.boolean(),
  data: z.object({
    total: z.number().optional(),
    itemType: z.string(),
    items: z.array(contactSchema),
  }),
});

assert<
  Equals<
    z.infer<typeof getContactsSchema>,
    {
      success: boolean;
      data: GetContactsResponse;
    }
  >
>();
