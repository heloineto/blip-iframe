import imp from '../imp';

/**
 * Retrieves details about the current user account.
 * @returns The account details
 */
export function getAccount() {
  return imp.sendMessage<GetAccountResponse>({
    action: 'getAccount',
  });
}

export interface GetAccountRequest {
  action: 'getAccount';
}

export interface GetAccountResponse {
  fullName: string;
  alternativeAccount: string;
  identity: string;
  email: string;
  phoneNumber: string;
  photoUri: string;
  timeZoneName: string;
  culture: string;
  creationDate: string;
}
