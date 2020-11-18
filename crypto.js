const crypto = require('crypto')
const { encode58, decode58 } = require('./base58')
const { utils } = require('ethers')

const sha256 = (msg) => crypto.createHash('sha256').update(Buffer.from(msg, 'hex')).digest('hex')

const getBase58CheckAddress = (hex) => {
  const doubleSha256 = sha256(sha256(hex));
  const checkSum = doubleSha256.substr(0, 8)
  const address = Buffer.from(hex + checkSum, 'hex')

  return encode58(address);
}

function decodeBase58Address(base58Sting) {
  if (typeof (base58Sting) != 'string')
    return false;

  if (base58Sting.length <= 4)
    return false;

  let address = decode58(base58Sting);

  if (base58Sting.length <= 4)
    return false;

  const len = address.length;
  const offset = len - 4;
  const checkSum = address.slice(offset);

  address = address.slice(0, offset);

  const hash0 = SHA256(address);
  const hash1 = SHA256(hash0);
  const checkSum1 = hash1.slice(0, 4);

  if (checkSum[0] == checkSum1[0] && checkSum[1] == checkSum1[1] && checkSum[2] ==
    checkSum1[2] && checkSum[3] == checkSum1[3]
  ) {
    return address;
  }

  throw new Error('Invalid address provided');
}

function SHA256(msgBytes) {
  const msgHex = byteArray2hexStr(msgBytes);
  const hashHex = utils.sha256('0x' + msgHex).replace(/^0x/, '')
  return hexStr2byteArray(hashHex);
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

module.exports = { getBase58CheckAddress, decodeBase58Address }