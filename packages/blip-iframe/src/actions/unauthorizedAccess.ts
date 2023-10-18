import imp from '../imp';

/**
 * Shows a unauthorized access toast and redirects the user to the
 * tenant's home page.
 */
export function unauthorizedAccess() {
  return imp.sendMessage<UnauthorizedAccessResponse>({
    action: 'unauthorizedAccess',
  });
}

export interface UnauthorizedAccessRequest {
  action: 'unauthorizedAccess';
}

export interface UnauthorizedAccessResponse {}
