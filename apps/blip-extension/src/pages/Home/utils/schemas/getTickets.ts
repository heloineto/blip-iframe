import type { GetTicketsResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

const ticketStatusSchema = z.enum([
  'None',
  'Waiting',
  'Assigned',
  'Open',
  'ClosedClient',
  'ClosedClientInactivity',
  'ClosedAttendant',
  'Transferred',
]);

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
        status: ticketStatusSchema,
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

export const getTicketsItemSchema = assert<
  Equals<
    z.infer<typeof getTicketsSchema>,
    {
      success: boolean;
      data: GetTicketsResponse;
    }
  >
>();
