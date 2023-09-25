import BlipForm from './components/BlipForm';

const actions = [
  'sendCommand',
  'startLoading',
  'stopLoading',
  'heightChange',
  'uploadFile',
  'stateChangeSuccess',
  'state',
  'showModal',
  'showStepperModal',
  'showChecklistModal',
  'showOverlayAndBlockScroll',
  'removeOverlayAndReleaseScroll',
  'hideNavbar',
  'showNavbar',
  'changeSubheaderTitle',
  'getCurrentLanguage',
  'toast',
  'getApplication',
  'hasPermissions',
  'getPermissionsObject',
  'segment',
  'getUserContext',
  'getToken',
  'getAccount',
  'sendApplicationRequest',
  'unauthorizedAccess',
  'addTenantPrefixToUrl',
  'getTenantUrl',
  'getTenantPlan',
  'inviteUser',
  'changeLocation',
  'changePath',
  'showUploadErrorToast',
  'showAlert',
  'redirectProcessor',
  'redirectToApplicationList',
  'redirectToSubscriptionNotificationPayment',
  'closeSidebar',
] as const;

const Home = () => {
  return (
    <div className="flex grow">
      <div className="w-[400px] bg-slate-700">
        <BlipForm />
      </div>
      <div className="grow" />
    </div>
  );
};

export default Home;
