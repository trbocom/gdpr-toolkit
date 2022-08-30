const gdpr = require('./index')

describe('ip', function () {
  describe('#anonymize()', function () {
    context('ipv4', function () {
      it('sets the last octet of an IPv4 address to 0', function () {
        expect(gdpr.anonymizeIp('127.0.0.1')).to.eq('127.0.0.0')
      })

      it('does not fail when it is not an ip address', function () {
        expect(gdpr.anonymizeIp('This is a test.')).to.eq('This is a test.')
      })

      it('does not fail when it is empty', function () {
        expect(gdpr.anonymizeIp('')).to.eq('')
      })

      it('does not fail when it is undefined', function () {
        expect(gdpr.anonymizeIp(undefined)).to.eq(undefined)
      })
    })

    context('ipv6', function () {
      it('sets the last 64 bits of an unshortened IPv6 address to 0', function () {
        expect(gdpr.anonymizeIp('e2ae:3624:7586:f0c4:5b14:39f0:1560:2e83')).to.eq('e2ae:3624:7586:f0c4:0:0:0:0')
      })

      it('sets the last 64 bits of a shortened (beginning) IPv6 address to 0', function () {
        expect(gdpr.anonymizeIp('::5b14:39f0:1560:2e83')).to.eq('0:0:0:0:0:0:0:0')
      })

      it('sets the last 64 bits of a shortened (middle) IPv6 address to 0', function () {
        expect(gdpr.anonymizeIp('e2ae:3624::39f0:1560:2e83')).to.eq('e2ae:3624:0:0:0:0:0:0')
      })

      it('sets the last 64 bits of a shortened (end) IPv6 address to 0', function () {
        expect(gdpr.anonymizeIp('e2ae:3624:7586::')).to.eq('e2ae:3624:7586:0:0:0:0:0')
      })

      it('does not fail with invalid shortened addresses', function () {
        expect(gdpr.anonymizeIp('e2ae:3624:7586:f0c4::5b14:39f0:1560:2e83:2e83')).to.eq('e2ae:3624:7586:f0c4:0:0:0:0')
      })
    })
  })
})
