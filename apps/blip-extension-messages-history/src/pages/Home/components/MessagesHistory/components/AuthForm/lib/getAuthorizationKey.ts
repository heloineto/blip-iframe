import { buildAuthorizationKey } from 'blip-iframe';
import { decrypt } from 'pages/KeysList/lib/decrypt';
import { z } from 'zod';

const dataSchema = z.object({
  shortName: z.string(),
  accessKey: z.string(),
});

export async function getAuthorizationKey(botKey: string) {
  const data = await decrypt(botKey, 'QU1ZckFqUHBvMEc3NUdKNUxQE8');

  const { accessKey, shortName } = dataSchema.parse(data);

  return buildAuthorizationKey({
    botAccessKey: accessKey,
    botShortName: shortName,
  });
}
