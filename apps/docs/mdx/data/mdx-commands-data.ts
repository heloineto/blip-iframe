import { Frontmatter } from '@/types';

export const MDX_COMMANDS_DATA: Record<string, Frontmatter> = {
  getAttendants: {
    title: 'getAttendants',
    package: 'blip-iframe',
    slug: '/commands/get-attendants',
    description: 'Get a list of attendants in the Blip platform',
    import: "import { getAttendants } from 'blip-iframe';",
    source: 'commands/attendants/getAttendants.ts',
    docs: 'commands/get-attendants.mdx',
  },
  getContacts: {
    title: 'getContacts',
    package: 'blip-iframe',
    slug: '/commands/get-contacts',
    description: 'Gets contacts information',
    import: "import { getContacts } from 'blip-iframe';",
    source: 'commands/contacts/getContacts.ts',
    docs: 'commands/get-contacts.mdx',
  },
};
