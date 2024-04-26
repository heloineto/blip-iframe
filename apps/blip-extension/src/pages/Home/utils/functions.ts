import type { Response } from 'blip-iframe';
import type { ZodSchema } from 'zod';
import { actions } from './actions';
import { commands } from './commands';

export const functions = {
  actions,
  commands,
};

export type BlipFunction = {
  value: string;
  fn: () => Promise<Response<unknown>>;
  schema?: ZodSchema;
};
