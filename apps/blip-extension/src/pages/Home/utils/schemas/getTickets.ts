import type { GetTicketsResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getTicketsSchema = z.object({
  success: z.boolean(),
  data: z.object({
    total: z.number(),
    itemType: z.string(),
    items: z.array(
      z.object({
        id: z.string(),
        sequentialId: z.number(),
        ownerIdentity: z.string(),
        customerIdentity: z.string(),
        customerDomain: z.string(),
        agentIdentity: z.string(),
        provider: z.string(),
        status: z.string(),
        storageDate: z.string(),
        openDate: z.string(),
        statusDate: z.string(),
        externalId: z.string(),
        rating: z.number(),
        team: z.string(),
        unreadMessages: z.number(),
        closed: z.boolean(),
        priority: z.number(),
        isAutomaticDistribution: z.boolean(),
        distributionType: z.string().optional(),
        closeDate: z.string().optional(),
        closedBy: z.string().optional(),
        firstResponseDate: z.string().optional(),
      })
    ),
  }),
});

assert<
  Equals<
    z.infer<typeof getTicketsSchema>,
    {
      success: boolean;
      data: GetTicketsResponse;
    }
  >
>();
