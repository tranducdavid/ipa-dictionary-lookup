import { Button, styled, ButtonProps, Typography, useTheme, Box, Grid } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'

enum SelectionMode {
  DESELECTED = 'deselected',
  REQUIRED = 'required',
  FORBIDDEN = 'forbidden',
}

function getNextSelectionMode(selectionMode: SelectionMode): SelectionMode {
  const values = Object.values(SelectionMode)
  return values[(values.indexOf(selectionMode) + 1) % values.length]
}

// ˈɪəntsɫɹkdiˌmɝzɛɑʊæbpoafʃeɡɔvŋuhwʒjθð
const consonants = ['b', 'd', 'dʒ', 'ð', 'f', 'ɡ', 'h', 'j', 'k', 'ɫ', 'm', 'n', 'ŋ', 'p', 'ɹ', 's', 'ʃ', 't', 'tʃ', 'θ', 'v', 'w', 'z', 'ʒ']
const monophthongs = ['ɑ', 'æ', 'ɛ', 'ɝ', 'ɔ', 'ə', 'ɪ', 'ʊ', 'i', 'u']
const diphthongs = ['aɪ', 'aʊ', 'ɔɪ', 'eɪ', 'oʊ']

type SelectionButtonState = { [symbol: string]: SelectionMode }
type SelectionButtonDispatch = React.Dispatch<React.SetStateAction<SelectionButtonState>>

function symbolsToSelectionButtonState(symbols: string[]) {
  return symbols.reduce((acc, s) => {
    acc[s] = SelectionMode.DESELECTED
    return acc
  }, {})
}

type SelectionButtonRowProps = {
  symbols: string[]
  state: SelectionButtonState
  setState: SelectionButtonDispatch
}

function SelectionButtonRow({ symbols, state, setState }: SelectionButtonRowProps) {
  const theme = useTheme()
  const onClick = (symbol: string, state: SelectionButtonState, setState: SelectionButtonDispatch) => () => {
    setState({ ...state, [symbol]: getNextSelectionMode(state[symbol]) })
  }
  return (
    <Box mb={theme.spacing(2)}>
      <Typography>Consonants</Typography>
      {symbols.map(symbol => (
        <SelectionButton key={symbol} selected={state[symbol]} onClick={onClick(symbol, state, setState)}>
          {symbol}
        </SelectionButton>
      ))}
    </Box>
  )
}

export function IpaLookup() {
  const theme = useTheme()

  const [consonantsState, setConsonantsState] = useState<SelectionButtonState>(symbolsToSelectionButtonState(consonants))

  return (
    <>
      <Typography variant="h6">Phonemes</Typography>
      <SelectionButtonRow symbols={consonants} state={consonantsState} setState={setConsonantsState} />

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

type SelectionButtonProps = {
  selected: SelectionMode
} & ButtonProps

const SelectionButton = styled(Button)<SelectionButtonProps>(({ selected, theme }) => ({
  minWidth: theme.spacing(5),
  lineHeight: '1rem',
  textTransform: 'none',
  color: theme.palette.selectionButtonColors?.text[selected],
  backgroundColor: theme.palette.selectionButtonColors?.background[selected],
  border: `solid 1px ${theme.palette.selectionButtonColors?.borderColor}`,
  margin: '1px',
  padding: '6px',
  '&:hover': {
    backgroundColor: theme.palette.selectionButtonColors?.background.hover[selected],
  },
}))
