type EventAction =
  | 'sendCommand'
  | 'startLoading'
  | 'stopLoading'
  | 'heightChange'
  | 'stateChangeSuccess'
  | 'showModal'
  | 'hideNavbar'
  | 'showNavbar'
  | 'getCurrentLanguage'
  | 'toast'
  | 'getApplication'
  | 'hasPermissions'
  | 'getPermissionsObject'
  | 'segment'
  | 'getTenantPlan';

export default EventAction;
