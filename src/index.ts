import getApplication from './actions/getApplication';
import getCurrentLanguage from './actions/getCurrentLanguage';
import hasPermissions from './actions/hasPermissions';
import heightChange from './actions/heightChange';
import segment from './actions/segment';
import sendCommand from './actions/sendCommand';
import showModal from './actions/showModal';
import startLoading from './actions/startLoading';
import stopLoading from './actions/stopLoading';
import toast from './actions/toast';
import getAccount from './actions/commands/getAccount';
import getBot from './actions/commands/getBot';
import getBots from './actions/commands/getBots';

const iframe = {
    getApplication,
    getCurrentLanguage,
    hasPermissions,
    heightChange,
    segment,
    sendCommand,
    showModal,
    startLoading,
    stopLoading,
    toast,
    commands: {
        getAccount,
        getBot,
        getBots,
    },
};

export default iframe;
export type * from './actions/getApplication';
export type * from './actions/getCurrentLanguage';
export type * from './actions/hasPermissions';
export type * from './actions/heightChange';
export type * from './actions/segment';
export type * from './actions/sendCommand';
export type * from './actions/showModal';
export type * from './actions/startLoading';
export type * from './actions/stopLoading';
export type * from './actions/toast';
export type * from './actions/commands/getAccount';
export type * from './actions/commands/getBot';
export type * from './actions/commands/getBots';
