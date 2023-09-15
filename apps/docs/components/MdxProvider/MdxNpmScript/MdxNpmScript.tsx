import { PnpmIcon } from '@/components/icons/PnpmIcon';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { NpmIcon, YarnIcon } from '@mantine/ds';
import { useLocalStorage } from '@mantine/hooks';
import classes from './MdxNpmScript.module.css';

interface MdxNpmScriptProps {
  yarnScript: string;
  npmScript: string;
  pnpmScript: string;
}

export function MdxNpmScript({
  yarnScript,
  npmScript,
  pnpmScript,
}: MdxNpmScriptProps) {
  const [tab, setTab] = useLocalStorage({
    key: 'script-tab',
    defaultValue: 0,
  });

  return (
    <CodeHighlightTabs
      classNames={{ root: classes.root }}
      activeTab={tab}
      onTabChange={setTab}
      code={[
        {
          fileName: 'npm',
          code: npmScript,
          language: 'bash',
          icon: <NpmIcon className={classes.icon} size={16} />,
        },
        {
          fileName: 'yarn',
          code: yarnScript,
          language: 'bash',
          icon: <YarnIcon className={classes.icon} size={16} />,
        },
        {
          fileName: 'pnpm',
          code: pnpmScript,
          language: 'bash',
          icon: <PnpmIcon className={classes.icon} size={16} />,
        },
      ]}
    />
  );
}
