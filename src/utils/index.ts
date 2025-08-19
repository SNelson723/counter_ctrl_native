import CryptoJS from 'crypto-js';

const encrypt = (input: string, secret: string) => {
  const key = CryptoJS.enc.Utf8.parse(secret);
  const iv1 = CryptoJS.enc.Utf8.parse(secret);
  const encrypted = CryptoJS.AES.encrypt(input, key, {
    keySize: 16,
    iv: iv1,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted + '';
};

export { encrypt };
