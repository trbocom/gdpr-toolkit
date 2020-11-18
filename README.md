# gdpr-toolkit
A library to easier comply with GDPR regulations (anonymization, pseudonymization)

## Installation

```
yarn add gdpr-toolkit
```

## Usage

```
const gdpr = require('gdpr-toolkit')

const ip = '256.256.256.256'

gdpr.anonymizeIp(ip)

console.log(ip)
// 256.256.256.0

```

## Licence

MIT
