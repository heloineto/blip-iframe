import type { GetPermissionsObjectResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const permissionObjectSchema = z.object({
  title: z.string(),
  claim: z.number(),
  id: z.string(),
  description: z.string(),
  hideInTemplate: z.array(z.string()).optional(),
});

export const getPermissionsObjectSchema = z.object({
  success: z.boolean(),
  data: z.object({
    payments: permissionObjectSchema,
    iaProviders: permissionObjectSchema,
    iaModel: permissionObjectSchema,
    iaEnhancement: permissionObjectSchema,
    channels: permissionObjectSchema,
    desk: permissionObjectSchema,
    users: permissionObjectSchema,
    scheduler: permissionObjectSchema,
    basicConfigurations: permissionObjectSchema,
    connectionInformations: permissionObjectSchema,
    resources: permissionObjectSchema,
    team: permissionObjectSchema,
    logMessages: permissionObjectSchema,
    builder: permissionObjectSchema,
    analysis: permissionObjectSchema,
    salesTools: permissionObjectSchema,
  }),
});

assert<
  Equals<
    z.infer<typeof getPermissionsObjectSchema>,
    {
      success: boolean;
      data: GetPermissionsObjectResponse;
    }
  >
>();
