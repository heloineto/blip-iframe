import { Frontmatter } from '@/types';

export const MDX_COMMANDS_DATA: Record<string, Frontmatter> = {
  getAttendant: {
    title: 'getAttendant',
    package: 'blip-iframe',
    slug: '/commands/get-attendant',
    description: 'Fetches information about an attendant in the Blip platform',
    import: "import { getAttendant } from 'blip-iframe';",
    source: 'commands/getAttendant.ts',
    docs: 'commands/get-attendant.mdx',
  },
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
  getThreads: {
    title: 'getThreads',
    package: 'blip-iframe',
    slug: '/commands/get-threads',
    description:
      'Get a list of threads (conversations) based on the specified parameters',
    import: "import { getThreads } from 'blip-iframe';",
    source: 'commands/threads/getThreads.ts',
    docs: 'commands/get-threads.mdx',
  },
  getTickets: {
    title: 'getTickets',
    package: 'blip-iframe',
    slug: '/commands/get-tickets',
    description: 'Get a list of tickets in the Blip platform',
    import: "import { getTickets } from 'blip-iframe';",
    source: 'commands/tickets/getTickets.ts',
    docs: 'commands/get-tickets.mdx',
  },
};
