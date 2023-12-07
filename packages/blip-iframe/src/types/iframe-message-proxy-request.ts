import { AddTenantPrefixToUrlRequest } from '../actions/addTenantPrefixToUrl';
import { GetAccountRequest } from '../actions/getAccount';
import { GetApplicationRequest } from '../actions/getApplication';
import { GetCurrentLanguageRequest } from '../actions/getCurrentLanguage';
import { GetPermissionsObjectRequest } from '../actions/getPermissionsObject';
import { GetTenantPlanRequest } from '../actions/getTenantPlan';
import { GetTenantUrlRequest } from '../actions/getTenantUrl';
import { GetTokenRequest } from '../actions/getToken';
import { GetUserContextRequest } from '../actions/getUserContext';
import { HasPermissionRequest } from '../actions/hasPermissions';
import { HeightChangeRequest } from '../actions/heightChange';
import { HideNavbarRequest } from '../actions/hideNavbar';
import { SegmentRequest } from '../actions/segment';
import { SendCommandRequest } from '../actions/sendCommand';
import { ShowAlertRequest } from '../actions/showAlert';
import { ShowChecklistModalRequest } from '../actions/showChecklistModal';
import { ShowModalRequest } from '../actions/showModal';
import { ShowNavbarRequest } from '../actions/showNavbar';
import { StartLoadingRequest } from '../actions/startLoading';
import { StopLoadingRequest } from '../actions/stopLoading';
import { ToastRequest } from '../actions/toast';
import { UnauthorizedAccessRequest } from '../actions/unauthorizedAccess';
import { UploadFileRequest } from '../actions/uploadFile';

export type IframeMessageProxyRequest =
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
  | GetTokenRequest
  | GetUserContextRequest
  | ShowAlertRequest
  | UnauthorizedAccessRequest
  | GetAccountRequest
  | UploadFileRequest
  | ShowChecklistModalRequest;
