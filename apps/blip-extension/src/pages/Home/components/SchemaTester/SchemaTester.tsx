import { Alert, Button, Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CheckCircle, XCircle } from '@phosphor-icons/react';
import type { ComponentProps, ReactNode } from 'react';
import ReactJson from 'react-json-view';
import type { SafeParseReturnType, ZodSchema } from 'zod';

interface Props extends ComponentProps<'div'> {
  schema: ZodSchema;
  response: unknown;
}

export function SchemaTester({ schema, response, ...rest }: Props) {
  const parseResult = schema.safeParse(response);

  return (
    <div {...rest}>
      {parseResult.success ? (
        <SchemaTesterAlert
          color="green"
          title="SCHEMA TEST SUCCEED"
          description="The response matched the expected type"
          parseResult={parseResult}
          icon={<CheckCircle size={32} weight="fill" />}
        />
      ) : (
        <SchemaTesterAlert
          color="red"
          title="SCHEMA TEST FAILED"
          description="The response did not match the expected type. Click on"
          parseResult={parseResult}
          icon={<XCircle size={32} weight="fill" />}
        />
      )}
    </div>
  );
}

function SchemaTesterAlert({
  parseResult,
  color,
  icon,
  title,
  description,
}: {
  parseResult: SafeParseReturnType<unknown, unknown>;
  color: 'red' | 'green';
  icon: ReactNode;
  title: string;
  description: string;
}) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Alert variant="light" color={color} title={title} icon={icon}>
      <div className="gap-md flex flex-col">
        {description}
        <Button
          w={200}
          onClick={toggle}
          size="sm"
          variant="light"
          color={color}
        >
          View details
        </Button>
      </div>
      <Collapse in={opened}>
        <div className="mt-md">
          <ReactJson
            src={parseResult}
            name="parseResults"
            theme="ocean"
            collapsed={2}
          />
        </div>
      </Collapse>
    </Alert>
  );
}
