import { IframeMessageProxy } from 'blip-iframe';

const Home = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          IframeMessageProxy.sendMessage({});
        }}
      >
        Publish Flow
      </button>
      {/* <Command label="getApplication()" command={() => getApplication()} />
      <Command
        label="getCurrentLanguage()"
        command={() => getCurrentLanguage()}
      /> */}
      {/* <Command label="getAttendants()" command={() => getAttendants()} /> */}
      {/* <Command label="getBots()" command={() => getBots('csgrowth')} /> */}
    </div>
  );
};

export default Home;
