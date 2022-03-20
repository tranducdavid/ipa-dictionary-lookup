import { IpaDictionary, IpaDictionarySearchQueryArgs } from 'app/types'
import { cacheResults } from 'app/utils'

const SimpleSearchEngine = (dictionary: IpaDictionary) => {
  const _search = (query: IpaDictionarySearchQueryArgs) => {
    return dictionary.filter(entry => {
      const requiredLetters = query.letters.required.every(letter => entry.spelling.includes(letter))
      const requiredIPAs = query.ipaSymbols.required.every(ipaSymbol => entry.pronunciation.some(e => e.includes(ipaSymbol)))
      const forbiddenLetters = query.letters.forbidden.every(letter => !entry.spelling.includes(letter))
      const forbiddenIPAs = query.ipaSymbols.forbidden.every(ipaSymbol => entry.pronunciation.some(e => !e.includes(ipaSymbol)))
      return requiredLetters && requiredIPAs && forbiddenLetters && forbiddenIPAs
    })
  }

  const search = cacheResults(_search, (query: IpaDictionarySearchQueryArgs) => {
    const rl = query.letters.required.join('')
    const bl = query.letters.forbidden.join('')
    const rp = query.ipaSymbols.required.join('')
    const bp = query.ipaSymbols.forbidden.join('')
    return `searchFullDictionary/rl:${rl};bl:${bl};rp:${rp};bp${bp}`
  })

  return { search }
}

export const SearchEngineManager = (() => {
  let instance: ReturnType<typeof SimpleSearchEngine> | null = null

  const create = (dictionary: IpaDictionary) => {
    if (dictionary == null) return null
    if (instance != null) return instance
    instance = SimpleSearchEngine(dictionary)
    return instance
  }

  const get = () => instance

  return { get, create }
})()
