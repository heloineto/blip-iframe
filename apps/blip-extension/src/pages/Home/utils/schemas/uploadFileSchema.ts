import type { UploadFileResponse } from 'blip-iframe';
import type { Equals } from 'tsafe';
import { assert } from 'tsafe';
import { z } from 'zod';

export const uploadFileSchema = z.object({
  success: z.boolean(),
  data: z.string(),
});

assert<
  Equals<
    z.infer<typeof uploadFileSchema>,
    {
      success: boolean;
      data: UploadFileResponse;
    }
  >
>();
