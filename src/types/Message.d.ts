import EventAction from './EventAction';
import Request from './Request';

type Message = Request & {
  caller?: string;
  fireAndForget?: boolean;
};

export default Message;
