type IpaDictionaryEntry = {
  readonly spelling: string
  readonly pronunciation: ReadonlyArray<string>
}

export type IpaDictionary = ReadonlyArray<IpaDictionaryEntry>

export type IpaDictionarySearchQueryArgs = {
  letters: {
    required: ReadonlyArray<string>
    forbidden: ReadonlyArray<string>
  }
  ipaSymbols: {
    required: ReadonlyArray<string>
    forbidden: ReadonlyArray<string>
  }
}
