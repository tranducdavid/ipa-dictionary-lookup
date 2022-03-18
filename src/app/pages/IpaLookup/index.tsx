import { Button, ButtonGroup, styled, ButtonProps } from '@mui/material'
import * as React from 'react'

enum SelectionButtonState {
  DESELECTED = 'deselected',
  REQUIRED = 'required',
  FORBIDDEN = 'forbidden',
}

interface SelectionButtonProps extends ButtonProps {
  state: SelectionButtonState
}

const SelectionButton = styled(Button)<SelectionButtonProps>(({ state, theme }) => ({
  backgroundColor: theme.palette.selectionButtonColors?.background[state],
  color: theme.palette.selectionButtonColors?.text[state],
  '&:hover': {
    backgroundColor: theme.palette.selectionButtonColors?.background.hover[state],
  },
}))

export function IpaLookup() {
  return (
    <>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <SelectionButton state={SelectionButtonState.DESELECTED}>One</SelectionButton>
        <SelectionButton state={SelectionButtonState.REQUIRED}>Two</SelectionButton>
        <SelectionButton state={SelectionButtonState.FORBIDDEN}>Three</SelectionButton>
      </ButtonGroup>
    </>
  )
}
