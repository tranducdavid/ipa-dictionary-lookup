const sjcl = require('sjcl')
const fs = require('fs')
const path = require('path')

const getHash = input => sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(input))

const targetPath = path.normalize(path.join(path.dirname(process.argv[1]), '..', 'public'))
const encoding = 'utf-8'

const filepath = filename => path.normalize(path.join(targetPath, filename))

const createHashFile = filename => fs.writeFileSync(filepath(`${filename}.sha256`), getHash(fs.readFileSync(filepath(`${filename}.txt`), encoding)), encoding)

createHashFile('dictionary_en_US')
