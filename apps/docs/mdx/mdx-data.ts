import { Frontmatter } from '@/types';
import { MDX_ACTIONS_DATA } from './data/mdx-actions-data';
import { MDX_COMMANDS_DATA } from './data/mdx-commands-data';
import { MDX_META_DATA } from './data/mdx-meta-data';

export const MDX_DATA: Record<string, Frontmatter> = {
  ...MDX_ACTIONS_DATA,
  ...MDX_COMMANDS_DATA,
  ...MDX_META_DATA,
};
