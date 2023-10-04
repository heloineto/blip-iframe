export async function getKey(password: string) {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(password);

  const salt = new Uint8Array(16);
  const iterations = 100000;
  const keyLength = 256;

  const derivedKey = await crypto.subtle.importKey(
    'raw',
    passwordBuffer,
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );

  const key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt,
      iterations: iterations,
      hash: 'SHA-256',
    },
    derivedKey,
    { name: 'AES-GCM', length: keyLength },
    true,
    ['encrypt', 'decrypt']
  );

  return key;
}
