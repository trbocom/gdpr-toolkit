const gdpr = require('./index')

describe('ip', function() {
  describe('#anonymize()', function() {
    it('should set the last octet to 0', function() {
      expect(gdpr.anonymizeIp('127.0.0.1')).to.eq('127.0.0.0')
    });
  });
});