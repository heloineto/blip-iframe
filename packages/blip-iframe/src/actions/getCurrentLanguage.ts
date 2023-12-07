import { sendMessage } from '../lib';

export interface GetCurrentLanguageParams {}

/**
 * Get the language of the current user account
 */
export function getCurrentLanguage(
  params?: GetCurrentLanguageParams,
  sender = sendMessage
) {
  return sender<GetCurrentLanguageResponse>({
    action: 'getCurrentLanguage',
  });
}

export interface GetCurrentLanguageRequest {
  action: 'getCurrentLanguage';
}

export type GetCurrentLanguageResponse = string;
