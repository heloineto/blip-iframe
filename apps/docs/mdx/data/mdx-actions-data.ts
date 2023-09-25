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
    description: 'Get the current language',
    import: "import { getApplication } from 'blip-iframe';",
    source: 'actions/getCurrentLanguage.ts',
    docs: 'actions/get-current-language.mdx',
  },
};
