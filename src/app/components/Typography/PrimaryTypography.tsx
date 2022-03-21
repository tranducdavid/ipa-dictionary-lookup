import { Typography } from '@mui/material'
import { styled } from '@mui/system'

export const TextPrimaryTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

export const PrimaryContrastTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrast,
}))
