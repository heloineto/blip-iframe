import EventAction from './EventAction';

interface Message {
    action: EventAction;
    content?: unknown;
    caller?: string;
    fireAndForget?: boolean;
}

export default Message;
