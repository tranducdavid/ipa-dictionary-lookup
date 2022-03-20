import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Tooltip, IconButton, useTheme } from '@mui/material'
import React from 'react'

type HelpTooltipIconProps = {
  tooltip: string
}

export function HelpTooltipIcon({ tooltip }: HelpTooltipIconProps) {
  const theme = useTheme()
  return (
    <Tooltip title={tooltip}>
      <IconButton sx={{ top: -2, padding: 0, marginLeft: theme.spacing(0.5) }}>
        <HelpOutlineIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  )
}
