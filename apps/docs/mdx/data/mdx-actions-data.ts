import { Frontmatter } from '@/types';

export const MDX_ACTIONS_DATA: Record<string, Frontmatter> = {
  getApplication: {
    title: 'getApplication',
    package: 'blip-iframe',
    slug: '/actions/get-application',
    description: 'Get details about a bot (application)',
    import: "import { getApplication } from 'blip-iframe';",
    source: 'actions/getApplication.ts',
    docs: 'actions/get-application.mdx',
  },
  getCurrentLanguage: {
    title: 'getCurrentLanguage',
    package: 'blip-iframe',
    slug: '/actions/get-current-language',
    description: 'Get the language of the current user account',
    import: "import { getCurrentLanguage } from 'blip-iframe';",
    source: 'actions/getCurrentLanguage.ts',
    docs: 'actions/get-current-language.mdx',
  },
  heightChange: {
    title: 'heightChange',
    package: 'blip-iframe',
    slug: '/actions/height-change',
    description: "Changes the height the extension's iframe parent",
    import: "import { heightChange } from 'blip-iframe';",
    source: 'actions/heightChange.ts',
    docs: 'actions/height-change.mdx',
  },
  hideNavbar: {
    title: 'hideNavbar',
    package: 'blip-iframe',
    slug: '/actions/hide-navbar',
    description: 'Hides the top navigation bar of the blip platform',
    import: "import { hideNavbar } from 'blip-iframe';",
    source: 'actions/hideNavbar.ts',
    docs: 'actions/hide-navbar.mdx',
  },
  sendCommand: {
    title: 'sendCommand',
    package: 'blip-iframe',
    slug: '/actions/send-command',
    description: 'Sends a command through the Blip Commands API',
    import: "import { sendCommand } from 'blip-iframe';",
    source: 'actions/sendCommand.ts',
    docs: 'actions/send-command.mdx',
  },
};