import { decrypt } from 'pages/KeysList/lib/decrypt';
import { z } from 'zod';

const dataSchema = z.object({
  shortName: z.string(),
  accessKey: z.string(),
  metadata: z.object({
    attendant: z.string().nullable(),
  }),
});

export async function getBotData(botKey: string) {
  const data = await decrypt(botKey, 'QU1ZckFqUHBvMEc3NUdKNUxQE8');
  return dataSchema.parse(data);
}
