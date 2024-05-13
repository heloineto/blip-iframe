import { BlipError } from './blipError';
import { parseErrorString } from './parseErrorString';

export function parseError(error: unknown) {
  if (error instanceof Error) {
    return new BlipError(error.message, 0, error);
  }

  if (typeof error === 'string') {
    return parseErrorString(error);
  }

  return new BlipError('Unknown error', 0, error);
}
