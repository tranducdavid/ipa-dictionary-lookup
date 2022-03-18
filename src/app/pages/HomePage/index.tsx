import * as React from 'react'
import { Helmet } from 'react-helmet-async'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="IPA Dictionary lookup" />
      </Helmet>
      <span>My HomePage</span>
    </>
  )
}
