export interface BlipContact {
  name?: string;
  group?: string;
  lastMessageDate: string;
  lastUpdateDate: string;
  identity: string;
  extras?: {
    isTestersGroup?: string;
    typeOfCompile?: string;
    authType?: string;
    'tunnel.owner'?: string;
    'tunnel.originator'?: string;
    lastUsedTenants?: string;
    cookies?: string;
    acceptedPlugins?: string;
  };
  source: string;
  email?: string;
  phoneNumber?: string;
  culture?: string;
}
