# Tron Format Address

Tron utility to convert address from hex to base58 and vice versa

## Installation

`$ npm i tron-format-address`

## Usage
### JavaScript
```
const { toHex, fromHex } = require('tron-format-address')

const address = 'TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX'
const addressBase58 = toHex(address)
const addressHex = fromHex(addressBase58)
console.log({ address, addressBase58, addressHex })
console.log(address === addressHex)
```

### TypeScript
```
import { toHex, fromHex } from 'tron-format-address';

const address = 'TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX';
const addressBase58 = toHex(address);
if (addressBase58) {
  const addressHex = fromHex(addressBase58);
  console.log({ address, addressBase58, addressHex });
  console.log(address === addressHex);
}
```
