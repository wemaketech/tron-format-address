const { encode58 } = require('./base58');
const { getBase58CheckAddress, decodeBase58Address } = require('./crypto')

// const hex = '411a6ac17c82ad141ebc524a9ffc94965848f35279' // TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX
// console.log(getBase58CheckAddress(hex) === 'TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX')
// console.log(getBase58CheckAddress('412eb90f8356345c903d9f85e58d1b8177890adfb6') === 'TEEFn7rQqx4Xc3GL1Bx27A155xAj7w5W7a')
// console.log(getBase58CheckAddress('4149a5f0cda413ab723fff9baf956329ecfe5d1a23') === 'TGgd7pXdZALo9GyT4pmF2tT6JRf7ETWVcL')
console.log(Buffer.from(decodeBase58Address('TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX')).toString('hex') === '411a6ac17c82ad141ebc524a9ffc94965848f35279')
