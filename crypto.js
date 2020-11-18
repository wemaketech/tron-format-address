const crypto = require('crypto')
const { encode58 } = require('./base58')

function getBase58CheckAddress(hex) {
  const doubleSha256 = sha256(sha256(hex));
  const checkSum = doubleSha256.substr(0, 8)
  const address = [...Buffer.from(hex + checkSum, 'hex')]

  return encode58(address);
}

const sha256 = (msg) => crypto.createHash('sha256').update(Buffer.from(msg, 'hex')).digest('hex')

module.exports = { getBase58CheckAddress }