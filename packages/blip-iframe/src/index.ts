import { IframeMessageProxy } from 'iframe-message-proxy';
import getApplication from './actions/getApplication';
import getCurrentLanguage from './actions/getCurrentLanguage';
import hasPermissions from './actions/hasPermissions';
import heightChange from './actions/heightChange';
import hideNavbar from './actions/hideNavbar';
import segment from './actions/segment';
import sendCommand from './actions/sendCommand';
import showModal from './actions/showModal';
import showNavbar from './actions/showNavbar';
import startLoading from './actions/startLoading';
import stopLoading from './actions/stopLoading';
import toast from './actions/toast';
import getAccount from './commands/getAccount';
import getBot from './commands/getBot';
import getBots from './commands/getBots';
import getPublishedFlow from './commands/getPublishedFlow';
import setVariable from './bucket/setVariable';
import getVariable from './bucket/getVariable';
import IframeMessageProxyType from './types/iframe-message';

const actions = {
  getApplication,
  getCurrentLanguage,
  hasPermissions,
  heightChange,
  hideNavbar,
  segment,
  sendCommand,
  showModal,
  showNavbar,
  startLoading,
  stopLoading,
  toast,
};

const commands = {
  getAccount,
  getBot,
  getBots,
  getPublishedFlow,
};

const bucket = {
  setVariable,
  getVariable,
};

const iframe = {
  ...actions,
  actions,
  commands,
  bucket,
  imp: IframeMessageProxy as IframeMessageProxyType,
};

export default iframe;
export type * from './actions/getApplication';
export type * from './actions/getCurrentLanguage';
export type * from './actions/hasPermissions';
export type * from './actions/heightChange';
export type * from './actions/hideNavbar';
export type * from './actions/segment';
export type * from './actions/sendCommand';
export type * from './actions/showModal';
export type * from './actions/showNavbar';
export type * from './actions/startLoading';
export type * from './actions/stopLoading';
export type * from './actions/toast';
export type * from './commands/getAccount';
export type * from './commands/getBot';
export type * from './commands/getBots';
export type * from './commands/getPublishedFlow';
