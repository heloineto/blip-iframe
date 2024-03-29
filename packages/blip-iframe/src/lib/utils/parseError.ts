import parseErrorString from './parseErrorString';

export default function parseError(error: unknown) {
  if (error instanceof Error) {
    return error;
  }

  if (typeof error === 'string') {
    return parseErrorString(error);
  }

  return new Error('Unknown error');
}
