import imp from '../imp';

export function getPermissionsObject() {
  return imp.sendMessage<GetPermissionsObjectResponse>({
    action: 'getPermissionsObject',
  });
}

export interface GetPermissionsObjectRequest {
  action: 'getPermissionsObject';
}

export interface GetPermissionsObjectResponse {}
