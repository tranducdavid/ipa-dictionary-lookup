/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { IpaLookup } from './pages/IpaLookup/Loadable'
import { HomePage } from './pages/HomePage/Loadable'
import { NotFoundPage } from './components/NotFoundPage/Loadable'
import { useTranslation } from 'react-i18next'
import { Box, Container, ThemeProvider } from '@mui/material'
import { NavBar } from './components/NavBar'
import { muiTheme } from 'styles/muiTheme'
import { QueryClient, QueryClientProvider } from 'react-query'

export function App() {
  const { i18n } = useTranslation()
  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={muiTheme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Helmet titleTemplate="%s" defaultTitle="IPA Dictionary lookup" htmlAttributes={{ lang: i18n.language }}>
          <meta name="description" content="IPA Dictionary lookup" />
        </Helmet>

        <QueryClientProvider client={queryClient}>
          <NavBar />
          <Container>
            <Box mt={2}>
              <Switch>
                <Route exact path="/" component={IpaLookup} />
                <Route exact path="/home" component={HomePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Box>
          </Container>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}