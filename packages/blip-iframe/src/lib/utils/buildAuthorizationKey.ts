export interface BuildAuthorizationKeyParams {
  botShortName: string;
  botAccessKey: string;
}

export default function buildAuthorizationKey({
  botShortName,
  botAccessKey,
}: BuildAuthorizationKeyParams) {
  return `Key ${btoa(`${botShortName}:${atob(botAccessKey)}`)}`;
}
