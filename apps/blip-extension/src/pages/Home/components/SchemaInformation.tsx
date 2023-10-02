import { Box, Button, Collapse, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ReactJson from 'react-json-view';
import type { ZodAny } from 'zod';
import type { BlipFnName, Category } from '../lib/blipFns';
import { blipFnsSchemas } from '../lib/blipFnsSchemas';

interface SchemaInformationProps<TCategory extends Category> {
  data: unknown;
  blipFn: {
    category: TCategory;
    name: BlipFnName<TCategory>;
  };
}

export function SchemaInformation<TCategory extends Category>({
  data,
  blipFn,
}: SchemaInformationProps<TCategory>) {
  const [opened, { toggle }] = useDisclosure(false);

  // @ts-expect-error -- ignore
  const schema = blipFnsSchemas[blipFn.category][blipFn.name] as ZodAny;

  if (!schema) return null;

  const { response } = data as { response: unknown };

  const parseResults = schema.safeParse(response);

  return (
    <div>
      {parseResults.success ? (
        <div className="text-green-500">
          The response matched the expected type
        </div>
      ) : (
        <div className="text-red-500">
          The response did not match the expected type
        </div>
      )}
      <Box maw={400} mx="auto">
        <Group justify="center" mb={5}>
          <Button onClick={toggle}>Toggle content</Button>
        </Group>

        <Collapse in={opened}>
          <ReactJson
            src={parseResults}
            name="parseResults"
            theme="ocean"
            style={{ width: 480 }}
            collapsed={2}
          />
        </Collapse>
      </Box>
    </div>
  );
}
