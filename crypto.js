const crypto = require('crypto')
const { encode58 } = require('./base58')

function isHexChar(c) {
  if ((c >= 'A' && c <= 'F') ||
    (c >= 'a' && c <= 'f') ||
    (c >= '0' && c <= '9')) {
    return 1;
  }

  return 0;
}

function hexChar2byte(c) {
  let d;

  if (c >= 'A' && c <= 'F')
    d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
  else if (c >= 'a' && c <= 'f')
    d = c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
  else if (c >= '0' && c <= '9')
    d = c.charCodeAt(0) - '0'.charCodeAt(0);

  if (typeof d === 'number')
    return d;
  else
    throw new Error('The passed hex char is not a valid hex char');
}

function hexStr2byteArray(str) {
  if (typeof str !== 'string')
    throw new Error('The passed string is not a string')

  const byteArray = Array();
  let d = 0;
  let j = 0;
  let k = 0;

  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);

    if (isHexChar(c)) {
      d <<= 4;
      d += hexChar2byte(c);
      j++;

      if (0 === (j % 2)) {
        byteArray[k++] = d;
        d = 0;
      }
    } else
      throw new Error('The passed hex char is not a valid hex string')
  }

  return byteArray;
}

function getBase58CheckAddress(addressBytes) {
  const hash0 = SHA256(addressBytes);
  const hash1 = SHA256(hash0);

  let checkSum = hash1.slice(0, 4);
  checkSum = addressBytes.concat(checkSum);

  return encode58(checkSum);
}

function SHA256(msgBytes) {
  console.log({ msgBytes })
  const msgHex = byteArray2hexStr(msgBytes);
  console.log({ msgHex })
  const hashHex = crypto.createHash('sha256').update(Buffer.from(msgBytes, 'hex')).digest('hex');
  return hexStr2byteArray(hashHex);
}

function byteArray2hexStr(byteArray) {
  let str = '';

  for (let i = 0; i < (byteArray.length); i++)
    str += byte2hexStr(byteArray[i]);

  return str;
}

function byte2hexStr(byte) {
  if (typeof byte !== 'number')
    throw new Error('Input must be a number');

  if (byte < 0 || byte > 255)
    throw new Error('Input must be a byte');

  const hexByteMap = '0123456789ABCDEF';

  let str = '';
  str += hexByteMap.charAt(byte >> 4);
  str += hexByteMap.charAt(byte & 0x0f);

  return str;
}

module.exports = {
  isHexChar,
  hexStr2byteArray,
  getBase58CheckAddress,
}