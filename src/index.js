function anonymizeIpv4 (ip) {
  const octets = ip.split('.')
  if (octets.length < 4) return ip

  return octets[0] + '.' + octets[1] + '.' + octets[2] + '.' + '0'
}

function anonymizeIpv6 (ip) {
  const hexs = ip.split(':')
  if (hexs.length < 8) return ip

  return hexs[0] + ':' + hexs[1] + ':' + hexs[2] + ':' + hexs[3] + ':' + '0:0:0:0'
}

module.exports = {
  anonymizeIp (ip) {
    if (!ip) return ip

    if (ip.indexOf('.') !== -1) return anonymizeIpv4(ip)
    if (ip.indexOf(':') !== -1) return anonymizeIpv6(ip)
    return ip
  }
}
