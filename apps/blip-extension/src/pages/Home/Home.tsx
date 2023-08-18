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

      <Command
        label="iframe.commands.getAttendants()"
        command={() => iframe.commands.getAttendants()}
      />
    </div>
  );
};

export default Home;
