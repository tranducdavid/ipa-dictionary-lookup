import { createTheme as _createTheme } from '@mui/material'
import { invert } from 'app/utils'

export const createTheme = (mode: 'light' | 'dark') => {
  const light = {
    type: 'light',
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
      disabled: 'rgba(0,0,0,0.38)',
      hint: 'rgba(0,0,0,0.38)',
    },
    primary: {
      main: '#3f51b5',
      light: '#6573c3',
      dark: '#2c387e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      light: '#f73378',
      dark: '#ab003c',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#f6685e',
      dark: '#aa2e25',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffac33',
      dark: '#b26a00',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    info: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#1769aa',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#6fbf73',
      dark: '#357a38',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    divider: 'rgba(0,0,0,0.12)',
  }
  const dark = {
    type: 'dark',
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
      hint: 'rgba(255,255,255,0.5)',
    },
    primary: {
      main: '#3f51b5',
      light: '#6573c3',
      dark: '#2c387e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
      light: '#f73378',
      dark: '#ab003c',
      contrastText: '#ffffff',
    },
    error: {
      main: '#f44336',
      light: '#f6685e',
      dark: '#aa2e25',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff9800',
      light: '#ffac33',
      dark: '#b26a00',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    info: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#1769aa',
      contrastText: '#ffffff',
    },
    success: {
      main: '#4caf50',
      light: '#6fbf73',
      dark: '#357a38',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    divider: 'rgba(255,255,255,0.12)',
  }
  const basePalette = mode === 'light' ? light : dark
  const customFields = {
    mode,
    selectionButtonColors: {
      background: {
        deselected: basePalette.background.paper,
        required: basePalette.primary.main,
        forbidden: basePalette.error.main,
        hover: {
          deselected: basePalette.background.default,
          required: basePalette.primary[invert(mode)],
          forbidden: basePalette.error[invert(mode)],
        },
      },
      text: {
        deselected: basePalette.text.primary,
        required: basePalette.primary.contrastText,
        forbidden: basePalette.error.contrastText,
      },
    },
  }
  const palette = { ...basePalette, ...customFields }
  return _createTheme({ palette })
}
