import NextHead from 'next/head'
import React from "react";

interface Meta {
  ({ title, summary, asPath }: {
    title?: string;
    summary?: string;
    asPath?: string;
  }): JSX.Element
}

const Meta: Meta = (props) => {
  const siteName = 'ち。'
  const siteDescription = 'ち。'
  const siteUrl = 'https://www.chi-maru.com'

  const { title, summary, asPath } = props;
  const pageTitle = `${title ? `${title} | ` : ''}${siteName}`
  const pageDescription = `${summary ? `${summary} | ` : ''}${siteDescription}`
  const pageUrl = `${siteUrl}${asPath}`

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
    </NextHead>
  )
}

export default Meta;
