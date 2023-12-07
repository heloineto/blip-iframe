import { IframeMessageProxy as _IframeMessageProxy } from 'iframe-message-proxy';
import { IframeMessageProxyType } from './types';

export const IframeMessageProxy = _IframeMessageProxy as IframeMessageProxyType;
export * from './actions';
export * from './blip';
export * from './commands';
export * from './lib';
export * from './types';
