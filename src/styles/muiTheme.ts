import { createTheme } from '@mui/material'

export const muiTheme = createTheme({
  palette: {
    selectionButtonColors: {
      background: {
        deselected: '#ffffff',
        whitelist: '#1976d2',
        blacklist: '#d32f2f',
        hover: {
          deselected: '#f7f5f5',
          whitelist: '#1565c0',
          blacklist: '#c22e29',
        },
      },
      text: {
        deselected: '#000000',
        whitelist: '#ffffff',
        blacklist: '#ffffff',
      },
    },
  },
})
