import { BlipError } from './blipError';

export function parseErrorString(error: string) {
  let errorObject: Record<string, unknown>;

  try {
    errorObject = JSON.parse(error);
  } catch (error) {
    return new BlipError(
      'Unknown error. Error is a string but could not be parsed as JSON',
      0,
      error
    );
  }

  if (typeof errorObject.message === 'string') {
    try {
      const messageObject = JSON.parse(errorObject.message);

      if (
        typeof messageObject.description === 'string' &&
        typeof messageObject.code === 'number'
      ) {
        return new BlipError(
          messageObject.description,
          messageObject.code,
          error
        );
      } else {
        return new BlipError(
          'Unknown error. Error was parsed to JSON and had a message property that could parsed as JSON, but it had incorrect type',
          0,
          error
        );
      }
    } catch (error) {
      return new BlipError(
        'Unknown error. Error was parsed to JSON but had a message property that could not be parsed as JSON',
        0,
        error
      );
    }
  }

  if (
    typeof errorObject.description === 'string' ||
    typeof errorObject.code === 'number'
  ) {
    return new BlipError(
      errorObject.description as string,
      errorObject.code as number,
      error
    );
  }

  return new BlipError(
    'Unknown error. Error was parsed to JSON but did not have a message property and did not have description and code properties',
    0,
    error
  );
}
