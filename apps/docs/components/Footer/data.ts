import { meta } from '@/lib/constants/meta';
import { LinksGroupProps } from './LinksGroup/LinksGroup';

export const FOOTER_LINKS_DATA: LinksGroupProps[] = [
  {
    title: 'About',
    data: [
      // { type: 'next', label: 'Contribute', link: '/pages/contributing/' },
      { type: 'next', label: 'About Blip Iframe', link: '/pages/about/' },
      { type: 'next', label: 'Changelog', link: '/pages/changelog/' },
      // TODO: Maintain releases page after v1
      // { type: 'link', label: 'Releases', link: meta.githubLinks.releases },
    ],
  },

  {
    title: 'Community',
    data: [
      // { type: 'link', label: 'Chat on Discord', link: meta.discordLink },
      // { type: 'link', label: 'Follow on Twitter', link: meta.twitterLink },
      {
        type: 'link',
        label: 'Follow on Github',
        link: 'https://github.com/heloineto',
      },
      {
        type: 'link',
        label: 'GitHub discussions',
        link: meta.githubLinks.discussions,
      },
    ],
  },
  {
    title: 'Project',
    data: [
      // { type: 'link', label: 'Mantine UI', link: meta.uiLink },
      // { type: 'link', label: 'Documentation', link: meta.docsLink },
      // {
      //   type: 'link',
      //   label: 'Github organization',
      //   link: meta.githubLinks.organization,
      // },
      { type: 'link', label: 'npm package', link: meta.npmLink },
    ],
  },
];
