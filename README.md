# Tron Format Address

Tron utility to convert address from hex to base58 and vice versa. The package is based on the source code of [TronWeb](https://github.com/TRON-US/tronweb)

## Support ❤️
Like what I do and want to support? You can always [buy me a coffee](https://buymeacoffee.com/mishakushka).

## Installation

`yarn add tron-format-address` or `npm i tron-format-address`

## Usage

### JavaScript

```
const { toHex, fromHex } = require('tron-format-address')

const address = 'TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX'
const addressBase58 = toHex(address)
const addressHex = fromHex(addressBase58)
console.log({ address, addressBase58, addressHex })
console.log(address === addressHex)
console.log(fromHex('0x5473b5d0a72f9a044d581b7db17594301cf33d7c'))
```

### TypeScript

```
import { toHex, fromHex } from 'tron-format-address';

const address = 'TCNtTa1rveKkovHR2ebABu4K66U6ocUCZX';
const addressBase58 = toHex(address);
const addressHex = fromHex(addressBase58);
console.log({ address, addressBase58, addressHex });
console.log(address === addressHex);
console.log(fromHex('0x5473b5d0a72f9a044d581b7db17594301cf33d7c'))
```

## Testing
Want to run tests?
1. Clone the original repo, then run
```
yarn
```
to install all dependencies.

2. And now you can run
```
yarn test
```
to run all the tests.