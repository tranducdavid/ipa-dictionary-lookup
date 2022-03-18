// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from '@mui/material/styles/createPalette'

interface SelectionButtonColors {
  background: {
    deselected: string
    whitelist: string
    blacklist: string
    hover: {
      deselected: string
      whitelist: string
      blacklist: string
    }
  }
  text: {
    deselected: string
    whitelist: string
    blacklist: string
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    selectionButtonColors?: SelectionButtonColors
  }

  interface Palette {
    selectionButtonColors?: SelectionButtonColors
  }
}
