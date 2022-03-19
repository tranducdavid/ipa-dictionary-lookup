type IpaDictionaryEntry = {
  readonly spelling: string
  readonly pronunciation: ReadonlyArray<string>
}

export type IpaDictionary = ReadonlyArray<IpaDictionaryEntry>
