import { createTheme as _createTheme } from '@mui/material'

export const createTheme = (mode: 'light' | 'dark') =>
  _createTheme({
    palette: {
      mode,
      selectionButtonColors: {
        borderColor: {
          deselected: mode === 'light' ? '#dfdfdf' : '#3f3f3f',
          required: '#1976d2',
          forbidden: '#d32f2f',
        },
        background: {
          deselected: mode === 'light' ? '#ffffff' : '#1f1f1f',
          required: '#1976d2',
          forbidden: '#d32f2f',
          hover: {
            deselected: mode === 'light' ? '#f7f5f5' : '#2f2f2f',
            required: '#1565c0',
            forbidden: '#c22e29',
          },
        },
        text: {
          deselected: mode === 'light' ? '#202020' : '#ffffff',
          required: '#ffffff',
          forbidden: '#ffffff',
        },
      },
    },
  })
