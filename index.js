const { getBase58CheckAddress } = require('./crypto')

const hex = '411a6ac17c82ad141ebc524a9ffc94965848f35279' // TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX
const bytes = [...Buffer.from(hex, 'hex')];
// console.log(bytes);
console.log(getBase58CheckAddress(bytes));
console.log(getBase58CheckAddress(bytes) === 'TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX')