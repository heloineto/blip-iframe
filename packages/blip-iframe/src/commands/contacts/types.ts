export interface Contact {
  name?: string;
  group?: string;
  lastMessageDate: string;
  lastUpdateDate: string;
  identity: string;
  extras?: Record<string, unknown>;
  source: string;
  city?: string;
  email?: string;
  phoneNumber?: string;
  culture?: string;
  photoUri?: string;
  timeZoneName?: string;
}
