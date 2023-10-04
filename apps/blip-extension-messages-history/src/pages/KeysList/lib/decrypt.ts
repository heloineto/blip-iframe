import { getKey } from './getKey';
import { parseEncryptionResult } from './parseEncryptionResult';

export async function decrypt(
  stringifiedEncryptionResult: string,
  password: string
) {
  const { encryptedData, iv } = parseEncryptionResult(
    stringifiedEncryptionResult
  );

  const key = await getKey(password);
  const decryptedData = await decryptData(encryptedData, iv, key);

  return decryptedData;
}

export async function decryptData(
  encryptedData: Uint8Array,
  iv: Uint8Array,
  key: CryptoKey
) {
  const decryptedData = await crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    encryptedData.buffer
  );

  const decoder = new TextDecoder();
  const plainText = decoder.decode(decryptedData);

  return JSON.parse(plainText) as unknown;
}
