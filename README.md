# gdpr-toolkit
A library to easier comply with GDPR regulations (anonymization, pseudonymization) in JavaScript applications with *zero* production dependencies.

Supports IPv4 and IPv6 addresses.

## Installation

```
yarn add gdpr-toolkit
```

## Usage

### IPv4

```
const gdpr = require('gdpr-toolkit')

const ipv4 = '256.256.256.256' 

const ipv4a = gdpr.anonymizeIp(ipv4)

console.log(ipv4a)
// 256.256.256.0
```

### IPv6

```
const gdpr = require('gdpr-toolkit')

const ipv6 = 'e2ae:3624:7586:f0c4:5b14:39f0:1560:2e83'

const ipv6a = gdpr.anonymizeIp(ipv6)

console.log(ipv6a)
// e2ae:3624:7586:f0c4:0:0:0:0
```

## Licence

MIT
