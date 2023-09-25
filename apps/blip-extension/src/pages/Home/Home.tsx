import { ScrollArea } from '@mantine/core';
import { useState } from 'react';
import BlipFnView from './components/BlipFnView';
import blipFns from './lib/blipFns';

const Home = () => {
  const [selectedFn, setSelectedFn] = useState<{
    category: string;
    name: string;
  } | null>(null);

  return (
    <div className="flex grow gap-10">
      <ScrollArea className="h-screen w-[350px] overflow-auto">
        {Object.entries(blipFns).map(([category, fns]) => (
          <div key={category} className="flex flex-col gap-3">
            <h2>{category}</h2>
            {Object.entries(fns).map(([name]) => (
              <button
                key={name}
                type="button"
                className="w-full rounded-lg bg-slate-500 px-3 py-2 text-white"
                onClick={() => setSelectedFn({ category, name })}
              >
                {name}
              </button>
            ))}
          </div>
        ))}
      </ScrollArea>
      <div className="grow">
        {selectedFn ? (
          <BlipFnView
            //@ts-expect-error -- ignore
            blipFn={selectedFn}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;
