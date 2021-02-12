import { expect } from 'chai'
import { toHex, fromHex } from '../lib/crypto'

describe('From Base58 to Hexadecimal', () => {
  it('#1', () => {
    const expectedHex = '0x1a6ac17c82ad141ebc524a9ffc94965848f35279'
    const hex = toHex('TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX')
    expect(hex).to.equal(expectedHex)
  })

  it('#2', () => {
    const expectedHex = '0x2eb90f8356345c903d9f85e58d1b8177890adfb6'
    const hex = toHex('TEEFn7rQqx4Xc3GL1Bx27A155xAj7w5W7a')
    expect(hex).to.equal(expectedHex)
  })

  it('#3', () => {
    const expectedHex = '0x49a5f0cda413ab723fff9baf956329ecfe5d1a23'
    const hex = toHex('TGgd7pXdZALo9GyT4pmF2tT6JRf7ETWVcL')
    expect(hex).to.equal(expectedHex)
  })
})

describe('From Hexadecimal to Base58', () => {
  it('#1', () => {
    const expectedBase58 = 'TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX'
    const base58 = fromHex('0x1a6ac17c82ad141ebc524a9ffc94965848f35279')
    expect(base58).to.equal(expectedBase58)
  })

  it('#2', () => {
    const expectedBase58 = 'TEEFn7rQqx4Xc3GL1Bx27A155xAj7w5W7a'
    const base58 = fromHex('0x2eb90f8356345c903d9f85e58d1b8177890adfb6')
    expect(base58).to.equal(expectedBase58)
  })

  it('#3', () => {
    const expectedBase58 = 'TGgd7pXdZALo9GyT4pmF2tT6JRf7ETWVcL'
    const base58 = fromHex('0x49a5f0cda413ab723fff9baf956329ecfe5d1a23')
    expect(base58).to.equal(expectedBase58)
  })
})
