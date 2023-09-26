import imp from '../imp';

/**
 * Get the language of the current user account
 */
export default async function getCurrentLanguage() {
  return await imp.sendMessage<GetCurrentLanguageResponse>({
    action: 'getCurrentLanguage',
  });
}

export interface GetCurrentLanguageRequest {
  action: 'getCurrentLanguage';
}

export type GetCurrentLanguageResponse = string;
