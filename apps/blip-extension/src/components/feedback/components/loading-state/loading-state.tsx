import type { CenterProps } from '@mantine/core';
import { Center, Loader } from '@mantine/core';
import clsx from 'clsx';

export interface LoadingStateProps extends CenterProps {}

// FUTURE: Add a "description" field (Ex.: "Fetching user profile...")
export function LoadingState({ className, ...rest }: LoadingStateProps) {
  return (
    <Center className={clsx('grow', className)} {...rest}>
      <Loader />
    </Center>
  );
}
