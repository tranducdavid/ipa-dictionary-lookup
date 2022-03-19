type IpaDictionaryEntry = {
  readonly word: string
  readonly ipa: ReadonlyArray<string>
}

export type IpaDictionary = ReadonlyArray<IpaDictionaryEntry>
