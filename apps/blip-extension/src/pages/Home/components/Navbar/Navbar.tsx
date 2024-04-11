import { ScrollArea, SegmentedControl } from '@mantine/core';
import clsx from 'clsx';
import { functions } from '../../utils/functions';

interface Props {
  section: 'actions' | 'commands';
  onChangeSection: (section: 'actions' | 'commands') => void;
  active: string | null;
  onChangeActive: (active: string | null) => void;
}

export function Navbar({
  active,
  onChangeActive,
  onChangeSection,
  section,
}: Props) {
  return (
    <nav className="pt-md gap-md border-r-dark-4 flex w-[300px] shrink-0 flex-col border-0 border-r border-solid bg-[var(--mantine-color-body)]">
      {/* <button
        type="button"
        className={clsx(
          'py-xs px-sm flex grow cursor-pointer items-center rounded-sm border-0 text-sm font-medium',
          'hover:bg-dark-6 text-dark-1 bg-transparent hover:text-white'
        )}
        onClick={async () => {
          const response = await blip.getBotAccount();

          if (!response.success) {
            return;
          }

          const account = {
            ...response.data,
            fullName: 'New Account Name 2',
          };

          const setResponse = await blip.setBotAccount({ account });

          console.log('response', response, 'set response', setResponse);
        }}
      >
        Test function
      </button> */}
      <div className="px-md">
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

      <ScrollArea>
        <div className="px-md pb-md flex flex-col">
          {functions[section].map((blipFunction) => (
            <button
              type="button"
              className={clsx(
                'py-xs px-sm flex grow cursor-pointer items-center rounded-sm border-0 text-sm font-medium',
                active === blipFunction.value
                  ? 'bg-blue-light text-blue-light-color'
                  : 'hover:bg-dark-6 text-dark-1 bg-transparent hover:text-white'
              )}
              key={blipFunction.value}
              onClick={(event) => {
                event.preventDefault();
                onChangeActive(blipFunction.value);
              }}
            >
              {blipFunction.value}
            </button>
          ))}
        </div>
      </ScrollArea>
    </nav>
  );
}
