import * as sjcl from 'sjcl'

export function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg)
  }
}

export const getSha256Hash = input => sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(input))

export const cacheResults = <TF extends (...args: any) => any>(
  f: TF,
  getKey: (...args: Parameters<TF>) => string = (...args) => getSha256Hash(JSON.stringify(args)),
): TF => {
  const cache: { [key: string]: ReturnType<TF> } = {}
  return ((...args: Parameters<TF>) => {
    const key = getKey(...args)
    if (cache[key] == null) {
      const value = f(...args)
      cache[key] = value
      return value
    }
    return cache[key]
  }) as TF
}

export function debounce<TF extends (...args: any) => any>(f: TF, timeout = 300): (...args: Parameters<TF>) => void {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      f(...args)
    }, timeout)
  }
}
