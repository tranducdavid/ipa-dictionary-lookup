import { Button, styled, ButtonProps } from '@mui/material'

export enum SelectionMode {
  DESELECTED = 'deselected',
  REQUIRED = 'required',
  FORBIDDEN = 'forbidden',
}

export type SelectionButtonProps = {
  selected: SelectionMode
} & ButtonProps

export const SelectionButton = styled(Button)<SelectionButtonProps>(({ selected, theme }) => ({
  minWidth: theme.spacing(5),
  lineHeight: '1rem',
  textTransform: 'none',
  color: theme.palette.selectionButtonColors.text[selected],
  backgroundColor: theme.palette.selectionButtonColors.background[selected],
  border: `solid 1px ${theme.palette.selectionButtonColors.borderColor[selected]}`,
  margin: '1px',
  padding: '6px',
  '&:hover': {
    backgroundColor: theme.palette.selectionButtonColors.background.hover[selected],
  },
}))
