import { GithubIcon } from '@mantine/ds';
import { HeaderControl } from './HeaderControl';

interface GithubControlProps {
  link: string;
}

export function GithubControl({ link }: GithubControlProps) {
  return (
    <HeaderControl
      tooltip="Source code"
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon size={22} />
    </HeaderControl>
  );
}
