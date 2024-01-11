import type { GetApplicationResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const getApplicationSchema = z.object({
  success: z.boolean(),
  data: z.object({
    shortName: z.string(),
    name: z.string(),
    description: z.string(),
    accessKey: z.string(),
    imageUri: z.string().optional(),
    template: z.string(),
    tenantId: z.string(),
    created: z.string(),
    updated: z.string(),
    hasPermission: z.boolean(),
    emailOwner: z.string(),
    applicationUserPermissionModel: z.array(
      z.object({ permissionClaim: z.number(), permissionAction: z.number() })
    ),
    channels: z.array(z.unknown()),
    applicationJson: z.record(z.unknown()),
    applicationDomainActivations: z.array(z.unknown()).optional(),
  }),
});

assert<
  Equals<
    z.infer<typeof getApplicationSchema>,
    {
      success: boolean;
      data: GetApplicationResponse;
    }
  >
>();
