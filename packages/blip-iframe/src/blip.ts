import * as actions from './actions';
import * as commands from './commands';

export const blip = {
  actions,
  commands,
  ...actions,
  ...commands,
};
