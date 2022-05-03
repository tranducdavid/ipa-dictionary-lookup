import { Dispatch, SetStateAction, useState } from 'react'

export const usePersistentState = <T>(
  key: string,
  defaultValue: T,
  parser: (str: string) => T = str => JSON.parse(str).data,
  serializer: (t: T) => string = t => JSON.stringify({ data: t }),
): [T, Dispatch<SetStateAction<T>>] => {
  const local = localStorage.getItem(key)

  let initialState = defaultValue
  try {
    if (local == null) {
      localStorage.setItem(key, serializer(defaultValue))
    } else {
      initialState = parser(local)
    }
  } catch (e) {
    localStorage.removeItem(key)
    localStorage.setItem(key, serializer(defaultValue))
  }

  const [state, setState] = useState<T>(initialState)
  const setStateAndLocalStorage: Dispatch<SetStateAction<T>> = (value: T | ((prevState: T) => T)) => {
    const t = typeof value === 'function' ? (value as (prevState: T) => T)(state) : value
    localStorage.setItem(key, serializer(t))
    setState(t)
  }
  return [state, setStateAndLocalStorage]
}
