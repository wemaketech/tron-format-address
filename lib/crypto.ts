import crypto from 'crypto'
import { encode58, decode58 } from './base58'

const sha256 = (msg: string) => crypto.createHash('sha256').update(Buffer.from(msg, 'hex')).digest('hex')

export const fromHex = (hex: string): string => {
  const addr = `41${hex.substring(2)}`
  const doubleSha256 = sha256(sha256(addr))
  const checkSum = doubleSha256.substring(0, 8)
  const address = Buffer.from(addr + checkSum, 'hex')

  return encode58(address)
}

export const toHex = (base58Sting: string): string => {
  if (base58Sting.length <= 4) throw new Error('Invalid address provided')

  let address = Buffer.from(decode58(base58Sting)).toString('hex')

  const checkSum = address.substring(address.length - 8, address.length)
  address = address.substring(0, address.length - 8)

  const checkSum1 = sha256(sha256(address)).substring(0, 8)

  if (`${checkSum}` === `${checkSum1}`) return `0x${address.substring(2)}`

  throw new Error('Invalid address provided')
}
