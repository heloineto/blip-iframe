import { Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { actions, commands } from 'blip-iframe';

export default function BlipForm() {
  const form = useForm({
    initialValues: {
      blipFn: '',
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={[
          { group: 'Actions', items: Object.keys(actions) },
          { group: 'Commands', items: Object.keys(commands) },
        ]}
        variant="filled"
        size="md"
        searchable
      />
      <pre>{JSON.stringify(form.values, null, 2)}</pre>
    </form>
  );
}
