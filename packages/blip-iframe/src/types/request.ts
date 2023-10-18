import { AddTenantPrefixToUrlRequest } from '../actions/addTenantPrefixToUrl';
import { GetApplicationRequest } from '../actions/getApplication';
import { GetCurrentLanguageRequest } from '../actions/getCurrentLanguage';
import { GetPermissionsObjectRequest } from '../actions/getPermissionsObject';
import { GetTenantPlanRequest } from '../actions/getTenantPlan';
import { GetTenantUrlRequest } from '../actions/getTenantUrl';
import { GetTokenResponse } from '../actions/getToken';
import { HasPermissionRequest } from '../actions/hasPermissions';
import { HeightChangeRequest } from '../actions/heightChange';
import { HideNavbarRequest } from '../actions/hideNavbar';
import { SegmentRequest } from '../actions/segment';
import { SendCommandRequest } from '../actions/sendCommand';
import { ShowModalRequest } from '../actions/showModal';
import { ShowNavbarRequest } from '../actions/showNavbar';
import { StartLoadingRequest } from '../actions/startLoading';
import { StopLoadingRequest } from '../actions/stopLoading';
import { ToastRequest } from '../actions/toast';

type Request =
  | GetApplicationRequest
  | GetCurrentLanguageRequest
  | HasPermissionRequest
  | HeightChangeRequest
  | SegmentRequest
  | SendCommandRequest
  | ShowModalRequest
  | StartLoadingRequest
  | StopLoadingRequest
  | ToastRequest
  | HideNavbarRequest
  | ShowNavbarRequest
  | AddTenantPrefixToUrlRequest
  | GetPermissionsObjectRequest
  | GetTenantPlanRequest
  | GetTenantUrlRequest
  | GetTokenResponse;

export default Request;
