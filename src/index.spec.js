const gdpr = require('./index')

describe('ip', function () {
  describe('#anonymize()', function () {
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

    it('sets the last 64 bits of an unshortened IPv6 address to 0', function () {
      expect(gdpr.anonymizeIp('2a02:810d:f00:7498:2492:dc94:82a4:9203')).to.eq('2a02:810d:f00:7498:0:0:0:0')
    })
  })
})
