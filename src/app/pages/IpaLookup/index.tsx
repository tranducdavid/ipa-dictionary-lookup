import { Typography, useTheme, Box, Grid } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'
import { SelectionButton, SelectionMode } from './SelectionButton'
import { symbolsToSelectionButtonState, SelectionButtonRow, SelectionButtonState } from './SelectionButtonRow'

// ˈɪəntsɫɹkdiˌmɝzɛɑʊæbpoafʃeɡɔvŋuhwʒjθð
const consonants = ['b', 'd', 'dʒ', 'ð', 'f', 'ɡ', 'h', 'j', 'k', 'ɫ', 'm', 'n', 'ŋ', 'p', 'ɹ', 's', 'ʃ', 't', 'tʃ', 'θ', 'v', 'w', 'z', 'ʒ']
const monophthongs = ['ɑ', 'æ', 'ɛ', 'ɝ', 'ɔ', 'ə', 'ɪ', 'ʊ', 'i', 'u']
const diphthongs = ['aɪ', 'aʊ', 'ɔɪ', 'eɪ', 'oʊ']

export function IpaLookup() {
  const theme = useTheme()

  const [consonantsState, setConsonantsState] = useState<SelectionButtonState>(symbolsToSelectionButtonState(consonants))

  return (
    <>
      <Typography variant="h6">Phonemes</Typography>
      <SelectionButtonRow label="Consonants" symbols={consonants} state={consonantsState} setState={setConsonantsState} />

      <Grid container flexDirection="row">
        <Box mb={theme.spacing(2)} mr={theme.spacing(2)}>
          <Typography>Monophthongs</Typography>
          {monophthongs.map(monophthong => (
            <SelectionButton key={monophthong} selected={SelectionMode.DESELECTED}>
              {monophthong}
            </SelectionButton>
          ))}
        </Box>

        <Box mb={theme.spacing(2)}>
          <Typography>Diphthongs</Typography>
          {diphthongs.map(diphthong => (
            <SelectionButton key={diphthong} selected={SelectionMode.DESELECTED}>
              {diphthong}
            </SelectionButton>
          ))}
        </Box>
      </Grid>
    </>
  )
}
