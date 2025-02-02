import * as Device from 'expo-device';

// Get the current time, date, and OS information to generate a custom key
export const generateKey = () => {
  const currentDate = new Date();  // Current date and time
  const currentTime = currentDate.getTime();  // Time in milliseconds since Unix Epoch
  const os = Device.osName;  // OS name (e.g., Android, iOS)
  
  // Combine time, date, and OS to generate a unique key
  return `${currentTime}-${os}-${currentDate.toISOString()}`;
};

// XOR Encryption function
export const xorEncrypt = (plaintext, secretKey) => {
  let encryptedText = '';
  let keyIndex = 0;

  for (let i = 0; i < plaintext.length; i++) {
    const charCode = plaintext.charCodeAt(i);
    const encryptedCharCode = charCode ^ secretKey.charCodeAt(keyIndex % secretKey.length);
    encryptedText += String.fromCharCode(encryptedCharCode);
    keyIndex++;
  }

  return encryptedText;
};

// XOR Decryption function
export const xorDecrypt = (encryptedText, secretKey) => {
  let decryptedText = '';
  let keyIndex = 0;

  for (let i = 0; i < encryptedText.length; i++) {
    const encryptedCharCode = encryptedText.charCodeAt(i);
    const decryptedCharCode = encryptedCharCode ^ secretKey.charCodeAt(keyIndex % secretKey.length);
    decryptedText += String.fromCharCode(decryptedCharCode);
    keyIndex++;
  }

  return decryptedText;
};
