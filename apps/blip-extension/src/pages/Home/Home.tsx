import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ResponseViewer } from './components/ResponseViewer';

const Home = () => {
  const [section, setSection] = useState<'actions' | 'commands'>('actions');
  const [active, setActive] = useState('Billing');

  return (
    <div className="bg-dark-9 flex h-screen overflow-auto text-slate-50">
      <Navbar
        section={section}
        onChangeSection={setSection}
        active={active}
        onChangeActive={setActive}
      />
      <ResponseViewer />
    </div>
  );
};

export default Home;
