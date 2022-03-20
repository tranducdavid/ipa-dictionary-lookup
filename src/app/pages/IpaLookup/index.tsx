import { Typography, Grid, Box, useTheme } from '@mui/material'
import * as React from 'react'
import { useMemo, useState } from 'react'
import { symbolsToSelectionButtonState, SelectionButtonRow, SelectionButtonState } from './SelectionButtonRow'
import { Loading } from 'app/components/Loading'
import { useDictionaryQuery } from 'app/queries'
import { DictionaryTable } from './DictionaryTable'
import { SelectionMode } from './SelectionButton'
import { SearchEngineManager } from './SearchEngine'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// ˈɪəntsɫɹkdiˌmɝzɛɑʊæbpoafʃeɡɔvŋuhwʒjθð
const consonants = ['b', 'd', 'dʒ', 'ð', 'f', 'ɡ', 'h', 'j', 'k', 'ɫ', 'm', 'n', 'ŋ', 'p', 'ɹ', 's', 'ʃ', 't', 'tʃ', 'θ', 'v', 'w', 'z', 'ʒ']
const monophthongs = ['ɑ', 'æ', 'ɛ', 'ɝ', 'ɔ', 'ə', 'ɪ', 'ʊ', 'i', 'u']
const diphthongs = ['aɪ', 'aʊ', 'ɔɪ', 'eɪ', 'oʊ']
const phonemes = [consonants, monophthongs, diphthongs].flat()

const useSymbolSelectionState = (symbols: string[]) => useState<SelectionButtonState>(symbolsToSelectionButtonState(symbols))
const symbolStateToQuery = (state: SelectionButtonState, selectionMode: SelectionMode) =>
  Object.entries(state)
    .filter(([_, v]) => v === selectionMode)
    .map(([k, _]) => k)

export function IpaLookup() {
  const { data: dictionary, status: dictionaryStatus } = useDictionaryQuery()
  const isLoading = dictionaryStatus !== 'success'

  const theme = useTheme()

  const [lettersState, setLettersState] = useSymbolSelectionState(letters)
  const [phonemesState, setPhonemesState] = useSymbolSelectionState(phonemes)

  const searchDictionaryQueryArgs = useMemo(
    () => ({
      letters: {
        required: symbolStateToQuery(lettersState, SelectionMode.REQUIRED),
        forbidden: symbolStateToQuery(lettersState, SelectionMode.FORBIDDEN),
      },
      ipaSymbols: {
        required: symbolStateToQuery(phonemesState, SelectionMode.REQUIRED),
        forbidden: symbolStateToQuery(phonemesState, SelectionMode.FORBIDDEN),
      },
    }),
    [lettersState, phonemesState],
  )

  const searchEngine = useMemo(() => (dictionary != null ? SearchEngineManager.create(dictionary) : null), [dictionary])

  const filteredDictionary = useMemo(() => searchEngine?.search(searchDictionaryQueryArgs), [searchEngine, searchDictionaryQueryArgs])

  return (
    <>
      <Loading open={isLoading} />
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Letters</Typography>
          <SelectionButtonRow symbols={letters} state={lettersState} setState={setLettersState} />

          <Typography variant="h6">Phonemes</Typography>
          <SelectionButtonRow label="Consonants" symbols={consonants} state={phonemesState} setState={setPhonemesState} />

          <Grid container flexDirection="row">
            <Box mr={theme.spacing(2)}>
              <SelectionButtonRow label="Monophthongs" symbols={monophthongs} state={phonemesState} setState={setPhonemesState} />
            </Box>
            <SelectionButtonRow label="Diphthongs" symbols={diphthongs} state={phonemesState} setState={setPhonemesState} />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Dictionary</Typography>
          <Box sx={{ position: 'relative' }}>
            <DictionaryTable data={filteredDictionary ?? []} />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
