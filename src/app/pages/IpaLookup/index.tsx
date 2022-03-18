import {
  Container,
  Box,
  Button,
  ButtonGroup,
  useTheme,
  styled,
  ButtonProps,
} from '@mui/material';
import * as React from 'react';

enum SelectionButtonState {
  DESELECTED = 'deselected',
  WHITELIST = 'whitelist',
  BLACKLIST = 'blacklist',
}

interface SelectionButtonProps extends ButtonProps {
  state: SelectionButtonState;
}

const SelectionButton = styled(Button)<SelectionButtonProps>(
  ({ state, theme }) => ({
    backgroundColor: theme.palette.selectionButtonColors?.background[state],
    color: theme.palette.selectionButtonColors?.text[state],
    '&:hover': {
      backgroundColor:
        theme.palette.selectionButtonColors?.background.hover[state],
    },
  }),
);

export function IpaLookup() {
  const theme = useTheme();

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <SelectionButton state={SelectionButtonState.DESELECTED}>
          One
        </SelectionButton>
        <SelectionButton state={SelectionButtonState.WHITELIST}>
          Two
        </SelectionButton>
        <SelectionButton state={SelectionButtonState.BLACKLIST}>
          Three
        </SelectionButton>
      </ButtonGroup>
    </>
  );
}
