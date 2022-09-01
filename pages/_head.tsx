import NextHead from 'next/head'
import * as React from "react";

interface Head {
  ({ title, description }: {
    title?: string;
    description?: string;
  }): JSX.Element
}

const Head: Head = (props) => {
  const siteName = 'ち。'
  const siteDescription = 'ち。'

  const { title, description } = props;
  const pageTitle = `${title ? `${title} | ` : ''}${siteName}`
  const pageDescription = `${description ? `${description} | ` : ''}${siteDescription}`

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </NextHead>
  )
}

export default Head;
