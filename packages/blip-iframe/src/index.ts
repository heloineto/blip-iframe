import { IframeMessageProxy as _IframeMessageProxy } from 'iframe-message-proxy';
import { IframeMessageProxyType } from './types';

export const IframeMessageProxy = _IframeMessageProxy as IframeMessageProxyType;
export * from './actions';
export { default as blip } from './blip';
export * from './bucket';
export * from './commands';
export * from './types';
