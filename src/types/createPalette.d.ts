// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as createPalette from '@mui/material/styles/createPalette'

interface SelectionButtonColors {
  background: {
    deselected: string
    required: string
    forbidden: string
    hover: {
      deselected: string
      required: string
      forbidden: string
    }
  }
  text: {
    deselected: string
    required: string
    forbidden: string
  }
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    selectionButtonColors: SelectionButtonColors
  }

  interface Palette {
    selectionButtonColors: SelectionButtonColors
  }
}
