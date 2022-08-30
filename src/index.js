function anonymizeIpv4 (ip) {
  const octets = ip.split('.')
  if (octets.length < 4) return ip

  return octets[0] + '.' + octets[1] + '.' + octets[2] + '.' + '0'
}

function unshortenIpv6 (ip) {
  if (ip.indexOf('::') === -1) return ip
  if (ip.indexOf('::') === 0) ip = '0' + ip

  const groups = ip.split(/[0-9a-f]:[0-9a-f]/).length + 1
  if (groups > 8) return ip

  return ip.replace('::', ':0'.repeat(8 - groups) + ':')
}

function anonymizeIpv6 (ip) {
  ip = unshortenIpv6(ip)
  const groups = ip.split(':')
  if (groups.length < 8) return ip

  return groups[0] + ':' + groups[1] + ':' + groups[2] + ':' + groups[3] + ':' + '0:0:0:0'
}

module.exports = {
  anonymizeIp (ip) {
    if (!ip) return ip

    if (ip.indexOf('.') !== -1) return anonymizeIpv4(ip)
    if (ip.indexOf(':') !== -1) return anonymizeIpv6(ip)
    return ip
  }
}
