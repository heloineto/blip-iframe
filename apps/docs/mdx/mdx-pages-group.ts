import { Frontmatter, MdxPagesCategory, MdxPagesGroup } from '@/types';
import { MDX_DATA } from './mdx-data';

export const MDX_PAGES_GROUPS: MdxPagesGroup[] = [
  {
    group: 'actions',
    pages: [
      MDX_DATA.addTenantPrefixToUrl,
      MDX_DATA.getAccount,
      MDX_DATA.getApplication,
      MDX_DATA.getCurrentLanguage,
      MDX_DATA.getPermissionsObject,
      MDX_DATA.getToken,
      MDX_DATA.hasPermissions,
      MDX_DATA.heightChange,
      MDX_DATA.hideNavbar,
      MDX_DATA.segment,
      MDX_DATA.sendCommand,
      MDX_DATA.showAlert,
      MDX_DATA.showModal,
      MDX_DATA.showNavbar,
      MDX_DATA.startLoading,
      MDX_DATA.stopLoading,
      MDX_DATA.toast,
      MDX_DATA.unauthorizedAccess,
      MDX_DATA.uploadFile,
    ],
  },
  {
    group: 'commands',
    pages: [
      MDX_DATA.getAttendants,
      MDX_DATA.getAttendant,
      MDX_DATA.getContacts,
      MDX_DATA.getThreads,
      MDX_DATA.getTickets,
    ],
  },
];

export const ALL_MDX_PAGES: Frontmatter[] = MDX_PAGES_GROUPS.reduce<
  Frontmatter[]
>((acc, group) => {
  group.pages.forEach((item) => {
    if (item.category) {
      const categoryPages = [...(item as MdxPagesCategory).pages];
      categoryPages.sort((a, b) => a.title.localeCompare(b.title));
      acc.push(...categoryPages);
    } else {
      acc.push(item as Frontmatter);
    }
  });

  return acc;
}, []);
