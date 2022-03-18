import { Typography, Grid } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { symbolsToSelectionButtonState, SelectionButtonRow, SelectionButtonState } from './SelectionButtonRow'

// ˈɪəntsɫɹkdiˌmɝzɛɑʊæbpoafʃeɡɔvŋuhwʒjθð
const consonants = ['b', 'd', 'dʒ', 'ð', 'f', 'ɡ', 'h', 'j', 'k', 'ɫ', 'm', 'n', 'ŋ', 'p', 'ɹ', 's', 'ʃ', 't', 'tʃ', 'θ', 'v', 'w', 'z', 'ʒ']
const monophthongs = ['ɑ', 'æ', 'ɛ', 'ɝ', 'ɔ', 'ə', 'ɪ', 'ʊ', 'i', 'u']
const diphthongs = ['aɪ', 'aʊ', 'ɔɪ', 'eɪ', 'oʊ']

export function IpaLookup() {
  const [consonantsState, setConsonantsState] = useState<SelectionButtonState>(symbolsToSelectionButtonState(consonants))
  const [monophthongsState, setMonophthongsState] = useState<SelectionButtonState>(symbolsToSelectionButtonState(monophthongs))
  const [diphthongsState, setDiphthongsState] = useState<SelectionButtonState>(symbolsToSelectionButtonState(diphthongs))

  return (
    <>
      <Typography variant="h6">Phonemes</Typography>
      <SelectionButtonRow label="Consonants" symbols={consonants} state={consonantsState} setState={setConsonantsState} />

      <Grid container flexDirection="row">
        <SelectionButtonRow label="Monophthongs" symbols={monophthongs} state={monophthongsState} setState={setMonophthongsState} />
        <SelectionButtonRow label="Diphthongs" symbols={diphthongs} state={diphthongsState} setState={setDiphthongsState} />
      </Grid>
    </>
  )
}
