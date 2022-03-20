import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

type LoadingProps = {
  open: boolean
}

export function Loading({ open }: LoadingProps) {
  return (
    <Backdrop sx={{ position: 'absolute', color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
