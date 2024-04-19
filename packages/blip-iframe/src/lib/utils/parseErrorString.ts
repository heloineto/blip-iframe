export function parseErrorString(error: string) {
  let errorObject: Record<string, unknown>;

  try {
    errorObject = JSON.parse(error);
  } catch (error) {
    return new Error(
      `Unknown error. Error is a string but could not be parsed as JSON \n Error: "${error}"`
    );
  }

  const { name, description, code } = errorObject;

  if (
    typeof name !== 'string' ||
    typeof description !== 'string' ||
    typeof code !== 'number'
  ) {
    return new Error(
      `Unknown error. Error is a JSON string but has incorrect type \n Error: "${error}"`
    );
  }

  return new Error(`${name}: ${description} (code: ${code})`);
}
