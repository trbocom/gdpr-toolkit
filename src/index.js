module.exports = {
  anonymizeIp (ip) {
    if (!ip) return ip

    const octets = ip.split('.')
    if (octets.length < 4) return ip
    return octets[0] + '.' + octets[1] + '.' + octets[2] + '.' + '0'
  }
}
