export default async function blipQueryFn<TResponse, TError = unknown>(
  promise: Promise<
    | {
        response: TResponse;
        error: null;
      }
    | {
        response: null;
        error: TError;
      }
  >
) {
  const { response, error } = await promise;
  // eslint-disable-next-line @typescript-eslint/no-throw-literal
  if (error) throw error;

  // A queryFn must never return undefined
  return response ?? null;
}
