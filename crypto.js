const crypto = require('crypto')
const { encode58, decode58 } = require('./base58')

const sha256 = (msg) => crypto.createHash('sha256').update(Buffer.from(msg, 'hex')).digest('hex')

const fromHex = (hex) => {
  const doubleSha256 = sha256(sha256(hex));
  const checkSum = doubleSha256.substr(0, 8)
  const address = Buffer.from(hex + checkSum, 'hex')

  return encode58(address);
}

const toHex = (base58Sting) => {
  if (typeof (base58Sting) !== 'string') return false;
  if (base58Sting.length <= 4) return false;

  let address = Buffer.from(decode58(base58Sting)).toString('hex')

  const checkSum = address.substr(-8)
  address = address.substr(0, address.length - 8)

  const checkSum1 = sha256(sha256(address)).substr(0, 8);

  if (`${checkSum}` === `${checkSum1}`) return address;

  throw new Error('Invalid address provided');
}

module.exports = { fromHex, toHex }