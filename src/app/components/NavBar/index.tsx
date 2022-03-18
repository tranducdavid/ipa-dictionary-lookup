import { Box, Container, Link, styled, Typography } from '@mui/material'
import { ReactComponent as GithubIcon } from './assets/github-icon.svg'
import React from 'react'

export function NavBar() {
  return (
    <NavBarBox>
      <NavBarContainer>
        <Typography variant="h6" fontWeight="bold">
          IPA Dictionary Lookup
        </Typography>
        <GitHubLink href="https://github.com/tranducdavid/ipa-dictionary-lookup" target="_blank" title="Github Page" rel="noopener noreferrer">
          <StyledGithubIcon />
          Github
        </GitHubLink>
      </NavBarContainer>
    </NavBarBox>
  )
}

const StyledGithubIcon = styled(GithubIcon)({
  marginRight: '0.25rem',
  height: '2rem',
})

const GitHubLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  padding: '0.25rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 500,
  alignItems: 'center',

  '&:hover': {
    opacity: 0.8,
  },

  '&:active': {
    opacity: 0.4,
  },
}))

const NavBarBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: theme.spacing(8),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}))

const NavBarContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}))
