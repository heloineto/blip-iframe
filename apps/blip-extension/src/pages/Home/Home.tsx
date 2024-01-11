import { useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { ResponseViewer } from './components/ResponseViewer';
import { functions } from './utils/functions';

const Home = () => {
  const [section, setSection] = useState<'actions' | 'commands'>('actions');
  const [active, setActive] = useState<string | null>(null);

  const blipFunction = useMemo(
    () =>
      active ? functions[section].find((fn) => fn.value === active) : null,
    [section, active]
  );

  return (
    <div className="bg-dark-9 flex h-screen overflow-auto text-slate-50">
      <Navbar
        section={section}
        onChangeSection={setSection}
        active={active}
        onChangeActive={setActive}
      />
      {blipFunction ? (
        <ResponseViewer section={section} blipFunction={blipFunction} />
      ) : null}
    </div>
  );
};

export default Home;
