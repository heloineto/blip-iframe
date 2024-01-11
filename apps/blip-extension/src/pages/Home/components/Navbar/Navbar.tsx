import { SegmentedControl } from '@mantine/core';
import clsx from 'clsx';
import { actions } from '../../utils/actions';

const functions = {
  actions,
  commands: [
    { value: 'Orders' },
    { value: 'Receipts' },
    { value: 'Reviews' },
    { value: 'Messages' },
    { value: 'Customers' },
    { value: 'Refunds' },
    { value: 'Files' },
  ],
};

interface Props {
  section: 'actions' | 'commands';
  onChangeSection: (section: 'actions' | 'commands') => void;
  active: string;
  onChangeActive: (active: string) => void;
}

export function Navbar({
  active,
  onChangeActive,
  onChangeSection,
  section,
}: Props) {
  return (
    <nav className="p-md border-r-dark-4 flex w-[300px] flex-col border-0 border-r border-solid bg-[var(--mantine-color-body)]">
      <div>
        <SegmentedControl
          value={section}
          onChange={onChangeSection}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: 'Actions', value: 'actions' },
            { label: 'Commands', value: 'commands' },
          ]}
        />
      </div>

      <div className="mt-xl grow">
        {functions[section].map((blipFunction) => (
          <button
            type="button"
            className={clsx(
              'text-dark-1 py-xs px-sm flex grow cursor-pointer items-center rounded-sm border-0 bg-transparent text-sm font-medium',
              active ? '' : ''
            )}
            key={blipFunction.value}
            onClick={(event) => {
              event.preventDefault();
              onChangeActive(blipFunction.value);
            }}
          >
            <span>{blipFunction.value}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
