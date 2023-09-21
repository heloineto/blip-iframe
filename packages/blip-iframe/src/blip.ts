import * as actions from './actions';
import * as bucket from './bucket';
import * as commands from './commands';

const blip = {
  ...actions,
  ...commands,
  bucket,
};

export default blip;
