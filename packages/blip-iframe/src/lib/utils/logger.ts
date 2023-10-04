import { Message } from '../../types';

const shouldLog = process.env.NODE_ENV === 'development' && false;

function getId(message: Message) {
  return message.action === 'sendCommand'
    ? `sendCommand to ${message.content.command.uri}`
    : message.action;
}

function logger(message: Message) {
  const id = getId(message);

  return {
    request: (response: Message) => {
      console.log(`[Blip Iframe] ${id} - Request:`, response);
    },
    response: (response: unknown) => {
      console.log(`[Blip Iframe] ${id} - Response: `, response);
    },
    error: (error: unknown) => {
      console.error(`[Blip Iframe] ${id} - Error: `, error);
    },
  };
}

function mockLogger() {
  return {
    request: () => {},
    response: () => {},
    error: () => {},
  };
}

export default shouldLog ? logger : mockLogger;
