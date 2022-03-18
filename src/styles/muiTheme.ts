import { createTheme } from '@mui/material'

export const muiTheme = createTheme({
  palette: {
    selectionButtonColors: {
      background: {
        deselected: '#ffffff',
        required: '#1976d2',
        forbidden: '#d32f2f',
        hover: {
          deselected: '#f7f5f5',
          required: '#1565c0',
          forbidden: '#c22e29',
        },
      },
      text: {
        deselected: '#000000',
        required: '#ffffff',
        forbidden: '#ffffff',
      },
    },
  },
})
