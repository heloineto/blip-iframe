import { getKey } from './getKey';
import { stringifyEncryptionResult } from './stringifyEncryptionResult';

export async function encrypt(data: unknown, password: string) {
  const plainText = JSON.stringify(data);

  const key = await getKey(password);
  const { encryptedData, iv } = await encryptData(plainText, key);

  return stringifyEncryptionResult(encryptedData, iv);
}

export async function encryptData(plainText: string, key: CryptoKey) {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(plainText);
  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encryptedData = await crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv: iv,
    },
    key,
    dataBuffer
  );

  return { encryptedData, iv };
}
