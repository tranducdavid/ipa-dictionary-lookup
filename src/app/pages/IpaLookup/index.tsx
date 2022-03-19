import { Typography, Grid, Box, useTheme } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { symbolsToSelectionButtonState, SelectionButtonRow, SelectionButtonState } from './SelectionButtonRow'
import { Loading } from 'app/components/Loading'
import { useDictionaryQuery } from 'app/queries'
import { DictionaryTable } from './DictionaryTable'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// ˈɪəntsɫɹkdiˌmɝzɛɑʊæbpoafʃeɡɔvŋuhwʒjθð
const consonants = ['b', 'd', 'dʒ', 'ð', 'f', 'ɡ', 'h', 'j', 'k', 'ɫ', 'm', 'n', 'ŋ', 'p', 'ɹ', 's', 'ʃ', 't', 'tʃ', 'θ', 'v', 'w', 'z', 'ʒ']
const monophthongs = ['ɑ', 'æ', 'ɛ', 'ɝ', 'ɔ', 'ə', 'ɪ', 'ʊ', 'i', 'u']
const diphthongs = ['aɪ', 'aʊ', 'ɔɪ', 'eɪ', 'oʊ']
const phonemes = [consonants, monophthongs, diphthongs].flat()

export function IpaLookup() {
  const { data: dictionary, status: dictionaryStatus } = useDictionaryQuery()

  const theme = useTheme()

  const useSymbolSelectionState = (symbols: string[]) => useState<SelectionButtonState>(symbolsToSelectionButtonState(symbols))
  const [lettersState, setLettersState] = useSymbolSelectionState(letters)
  const [phonemesState, setPhonemesState] = useSymbolSelectionState(phonemes)

  return (
    <>
      {dictionaryStatus !== 'success' && <Loading />}
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
          <DictionaryTable data={dictionary ?? []} />
        </Grid>
      </Grid>
    </>
  )
}
