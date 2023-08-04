import iframe from 'blip-iframe';
import Command from './components/Command';

const Home = () => {
  return (
    <div>
      <Command
        label="iframe.actions.getApplication()"
        command={() => iframe.actions.getApplication()}
      />
      <Command
        label="iframe.actions.getCurrentLanguage()"
        command={() => iframe.actions.getCurrentLanguage()}
      />
    </div>
  );
};

export default Home;
