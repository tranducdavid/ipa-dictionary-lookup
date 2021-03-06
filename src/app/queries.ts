import { getSha256Hash } from 'app/utils'
import { useQuery } from 'react-query'
import { IpaDictionary } from './types'

function preprocessDictionary(dictionary: string): IpaDictionary {
  return dictionary.split('\n').map(row => {
    const split = row.split('\t')
    return { spelling: split[0], pronunciation: split[1].split(', ') }
  })
}

export function useDictionaryQuery() {
  return useQuery('dictionaryData', async () => {
    const dictionaryHash = await (await fetch(`${process.env.PUBLIC_URL}/dictionary_en_US.sha256`)).text()
    const localDictionary = localStorage.getItem('dictionary_en_US')

    if (localDictionary) {
      const localDictionaryHash = getSha256Hash(localDictionary)
      if (localDictionaryHash === dictionaryHash) return preprocessDictionary(localDictionary)
    }

    const dictionary = await (await fetch(`${process.env.PUBLIC_URL}/dictionary_en_US.txt`)).text()
    localStorage.setItem('dictionary_en_US', dictionary)
    return preprocessDictionary(dictionary)
  })
}

export function useCommitHash() {
  return useQuery('commitHash', async () => {
    return await (await fetch(`${process.env.PUBLIC_URL}/commitHash.hex`)).text()
  })
}
