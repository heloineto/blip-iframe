export function parseEncryptionResult(stringifiedEncryptionResult: string) {
  const obj = JSON.parse(atob(stringifiedEncryptionResult)) as {
    encryptedData: string;
    iv: string;
  };
  const { encryptedData: encryptedDataString, iv: ivString } = obj;

  const encryptedData = new Uint8Array(
    atob(encryptedDataString)
      .split('')
      .map((char) => char.charCodeAt(0))
  );

  const iv = new Uint8Array(
    atob(ivString)
      .split('')
      .map((char) => char.charCodeAt(0))
  );

  return { encryptedData, iv };
}
