import {
  Box,
  Container,
  makeStyles,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';

export function NavBar() {
  return (
    <NavBarBox>
      <Container>
        <Typography variant="h6">IPA Dictionary Lookup</Typography>
      </Container>
    </NavBarBox>
  );
}

const NavBarBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: theme.spacing(6),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));
