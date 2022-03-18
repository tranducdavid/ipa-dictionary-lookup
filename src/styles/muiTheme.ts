import { createTheme } from '@mui/material'

export const muiTheme = createTheme({
  palette: {
    selectionButtonColors: {
      borderColor: '#a0a0a0',
      background: {
        deselected: '#f0f0f0',
        required: '#1976d2',
        forbidden: '#d32f2f',
        hover: {
          deselected: '#f7f5f5',
          required: '#1565c0',
          forbidden: '#c22e29',
        },
      },
      text: {
        deselected: '#202020',
        required: '#ffffff',
        forbidden: '#ffffff',
      },
    },
  },
})
