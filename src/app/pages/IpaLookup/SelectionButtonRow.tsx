import { Typography, useTheme, Box } from '@mui/material'
import * as React from 'react'
import { SelectionButton, SelectionMode } from './SelectionButton'

function getNextSelectionMode(selectionMode: SelectionMode): SelectionMode {
  const values = Object.values(SelectionMode)
  return values[(values.indexOf(selectionMode) + 1) % values.length]
}

export type SelectionButtonState = { [symbol: string]: SelectionMode }
type SelectionButtonDispatch = React.Dispatch<React.SetStateAction<SelectionButtonState>>

type SelectionButtonRowProps = {
  label?: string
  symbols: string[]
  state: SelectionButtonState
  setState: SelectionButtonDispatch
}

export function SelectionButtonRow({ label, symbols, state, setState }: SelectionButtonRowProps) {
  const theme = useTheme()
  const onClick = (symbol: string, state: SelectionButtonState, setState: SelectionButtonDispatch) => () => {
    setState({ ...state, [symbol]: getNextSelectionMode(state[symbol]) })
  }
  return (
    <Box mb={theme.spacing(2)}>
      {label && <Typography>{label}</Typography>}
      {symbols.map(symbol => (
        <SelectionButton variant="contained" key={symbol} selected={state[symbol]} onClick={onClick(symbol, state, setState)}>
          {symbol}
        </SelectionButton>
      ))}
    </Box>
  )
}

export function symbolsToSelectionButtonState(symbols: string[]) {
  return symbols.reduce((acc, s) => {
    acc[s] = SelectionMode.DESELECTED
    return acc
  }, {})
}
