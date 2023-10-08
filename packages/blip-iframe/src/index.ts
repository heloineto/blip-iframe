import { IframeMessageProxy as _IframeMessageProxy } from 'iframe-message-proxy';
import { IframeMessageProxyType } from './types';

export const IframeMessageProxy = _IframeMessageProxy as IframeMessageProxyType;
export * from './actions';
export * as actions from './actions';
export { default as blip } from './blip';
export * from './bucket';
export * from './commands';
export * as commands from './commands';
export { default as imp } from './imp';
export * from './lib';
export * from './types';
