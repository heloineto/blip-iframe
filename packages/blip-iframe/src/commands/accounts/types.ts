export interface BotAccount {
  fullName: string;
  alternativeAccount: string;
  identity: string;
  email: string;
  phoneNumber: string;
  photoUri: string;
  timeZoneName: string;
  culture: string;
  extras: {
    tenantId?: string;
    template?: string;
    description?: string;
    onboardingChecklist?: string;
    [k: string]: unknown;
  };
  source: string;
  creationDate: string;
}
