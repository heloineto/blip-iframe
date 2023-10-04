export function stringifyEncryptionResult(
  encryptedData: ArrayBuffer,
  iv: Uint8Array
) {
  const encryptedDataArray = Array.from(new Uint8Array(encryptedData));
  const encryptedDataString = btoa(String.fromCharCode(...encryptedDataArray));
  const ivString = btoa(String.fromCharCode(...iv));

  return btoa(
    JSON.stringify({ encryptedData: encryptedDataString, iv: ivString })
  );
}
