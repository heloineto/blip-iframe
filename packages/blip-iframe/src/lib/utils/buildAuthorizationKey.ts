// TODO: Document util functions

export interface BuildAuthorizationKeyParams {
  botShortName: string;
  botAccessKey: string;
}

export default function buildAuthorizationKey({
  botShortName,
  botAccessKey,
}: BuildAuthorizationKeyParams) {
  try {
    const result = `Key ${btoa(`${botShortName}:${atob(botAccessKey)}`)}`;
    return { result, error: null };
  } catch (error) {
    return { result: null, error };
  }
}
