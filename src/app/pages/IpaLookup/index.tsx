import { Typography, Grid, Box, useTheme } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { symbolsToSelectionButtonState, SelectionButtonRow, SelectionButtonState } from './SelectionButtonRow'

// ˈɪəntsɫɹkdiˌmɝzɛɑʊæbpoafʃeɡɔvŋuhwʒjθð
const consonants = ['b', 'd', 'dʒ', 'ð', 'f', 'ɡ', 'h', 'j', 'k', 'ɫ', 'm', 'n', 'ŋ', 'p', 'ɹ', 's', 'ʃ', 't', 'tʃ', 'θ', 'v', 'w', 'z', 'ʒ']
const monophthongs = ['ɑ', 'æ', 'ɛ', 'ɝ', 'ɔ', 'ə', 'ɪ', 'ʊ', 'i', 'u']
const diphthongs = ['aɪ', 'aʊ', 'ɔɪ', 'eɪ', 'oʊ']

export function IpaLookup() {
  const theme = useTheme()

  const useSymbolSelectionState = (symbols: string[]) => useState<SelectionButtonState>(symbolsToSelectionButtonState(symbols))

  const [consonantsState, setConsonantsState] = useSymbolSelectionState(consonants)
  const [monophthongsState, setMonophthongsState] = useSymbolSelectionState(monophthongs)
  const [diphthongsState, setDiphthongsState] = useSymbolSelectionState(diphthongs)

  return (
    <>
      <Typography variant="h6">Phonemes</Typography>
      <SelectionButtonRow label="Consonants" symbols={consonants} state={consonantsState} setState={setConsonantsState} />

      <Grid container flexDirection="row">
        <Box mr={theme.spacing(2)}>
          <SelectionButtonRow label="Monophthongs" symbols={monophthongs} state={monophthongsState} setState={setMonophthongsState} />
        </Box>
        <SelectionButtonRow label="Diphthongs" symbols={diphthongs} state={diphthongsState} setState={setDiphthongsState} />
      </Grid>
    </>
  )
}
