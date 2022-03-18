import { Button, ButtonGroup, styled, ButtonProps, Typography, useTheme, Box } from '@mui/material'
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
      <Box mb={theme.spacing(2)}>
        <Typography>Consonants</Typography>
        <ButtonGroup>
          {consonants.map(consonant => (
            <SelectionButton state={SelectionButtonState.DESELECTED}>{consonant}</SelectionButton>
          ))}
        </ButtonGroup>
      </Box>

      <Box mb={theme.spacing(2)}>
        <Typography>Monophthongs</Typography>
        <ButtonGroup>
          {monophthongs.map(monophthong => (
            <SelectionButton state={SelectionButtonState.DESELECTED}>{monophthong}</SelectionButton>
          ))}
        </ButtonGroup>
      </Box>

      <Box mb={theme.spacing(2)}>
        <Typography>Diphthongs</Typography>
        <ButtonGroup>
          {diphthongs.map(diphthong => (
            <SelectionButton state={SelectionButtonState.DESELECTED}>{diphthong}</SelectionButton>
          ))}
        </ButtonGroup>
      </Box>

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
  textTransform: 'none',
  backgroundColor: theme.palette.selectionButtonColors?.background[state],
  borderColor: theme.palette.selectionButtonColors?.borderColor,
  color: theme.palette.selectionButtonColors?.text[state],
  '&:hover': {
    backgroundColor: theme.palette.selectionButtonColors?.background.hover[state],
  },
}))
