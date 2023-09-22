const shouldLog = process.env.NODE_ENV === 'development' && false;

const log = shouldLog
  ? {
      request: (uri: string, request: unknown) => {
        console.log(`[Blip Iframe] Request: ${uri}`, request);
      },
      response: (uri: string, response: unknown) => {
        console.log(`[Blip Iframe] Response: ${uri}`, response);
      },
      error: (error: unknown) => {
        console.error(`[Blip Iframe] Error: `, error);
      },
    }
  : {
      request: () => {},
      response: () => {},
      error: () => {},
    };

export default log;
