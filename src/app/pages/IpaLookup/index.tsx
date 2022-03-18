import { Button, ButtonGroup, styled, ButtonProps, Typography, useTheme, Box, Grid } from '@mui/material'
import * as React from 'react'

enum SelectionButtonState {
  DESELECTED = 'deselected',
  REQUIRED = 'required',
  FORBIDDEN = 'forbidden',
}

export function IpaLookup() {
  // ˈɪəntsɫɹkdiˌmɝzɛɑʊæbpoafʃeɡɔvŋuhwʒjθð

  const theme = useTheme()

  const consonants = ['b', 'd', 'dʒ', 'ð', 'f', 'ɡ', 'h', 'j', 'k', 'ɫ', 'm', 'n', 'ŋ', 'p', 'ɹ', 's', 'ʃ', 't', 'tʃ', 'θ', 'v', 'w', 'z', 'ʒ']
  const monophthongs = ['ɑ', 'æ', 'ɛ', 'ɝ', 'ɔ', 'ə', 'ɪ', 'ʊ', 'i', 'u']
  const diphthongs = ['aɪ', 'aʊ', 'ɔɪ', 'eɪ', 'oʊ']

  return (
    <>
      <Typography variant="h6">Phonemes</Typography>
      <Box mb={theme.spacing(2)}>
        <Typography>Consonants</Typography>
        {consonants.map(consonant => (
          <SelectionButton state={SelectionButtonState.DESELECTED}>{consonant}</SelectionButton>
        ))}
      </Box>

      <Grid container flexDirection="row">
        <Box mb={theme.spacing(2)} mr={theme.spacing(2)}>
          <Typography>Monophthongs</Typography>
          {monophthongs.map(monophthong => (
            <SelectionButton state={SelectionButtonState.DESELECTED}>{monophthong}</SelectionButton>
          ))}
        </Box>

        <Box mb={theme.spacing(2)}>
          <Typography>Diphthongs</Typography>
          {diphthongs.map(diphthong => (
            <SelectionButton state={SelectionButtonState.DESELECTED}>{diphthong}</SelectionButton>
          ))}
        </Box>
      </Grid>

      <ButtonGroup>
        <SelectionButton state={SelectionButtonState.DESELECTED}>test1</SelectionButton>
        <SelectionButton state={SelectionButtonState.REQUIRED}>test2</SelectionButton>
        <SelectionButton state={SelectionButtonState.FORBIDDEN}>test3</SelectionButton>
      </ButtonGroup>
    </>
  )
}

type SelectionButtonProps = {
  state: SelectionButtonState
} & ButtonProps

const SelectionButton = styled(Button)<SelectionButtonProps>(({ state, theme }) => ({
  minWidth: theme.spacing(5),
  lineHeight: '1rem',
  textTransform: 'none',
  color: theme.palette.selectionButtonColors?.text[state],
  backgroundColor: theme.palette.selectionButtonColors?.background[state],
  border: `solid 1px ${theme.palette.selectionButtonColors?.borderColor}`,
  margin: '1px',
  padding: '6px',
  '&:hover': {
    backgroundColor: theme.palette.selectionButtonColors?.background.hover[state],
  },
}))
