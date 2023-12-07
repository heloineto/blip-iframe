import { sendMessage } from '../lib';

export interface UnauthorizedAccessParams {}

/**
 * Shows a unauthorized access toast and redirects the user to the
 * tenant's home page.
 */
export function unauthorizedAccess(
  params: UnauthorizedAccessParams,
  sender = sendMessage
) {
  return sender<UnauthorizedAccessResponse>({
    action: 'unauthorizedAccess',
  });
}

export interface UnauthorizedAccessRequest {
  action: 'unauthorizedAccess';
}

export interface UnauthorizedAccessResponse {}
