import * as sjcl from 'sjcl'

export const getSha256Hash = input => sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(input))
