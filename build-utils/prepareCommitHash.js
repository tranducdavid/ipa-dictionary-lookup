const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const execSyncWrapper = command => {
  let stdout = null
  try {
    stdout = execSync(command).toString().trim()
  } catch (error) {
    console.error(error)
  }
  return stdout
}

const filePath = path.normalize(path.join(path.dirname(process.argv[1]), '..', 'public', 'commitHash.hex'))
const encoding = 'utf-8'
const fileContents = execSyncWrapper('git rev-parse HEAD')

fs.writeFileSync(filePath, fileContents, encoding)
