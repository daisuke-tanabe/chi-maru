import NextHead from 'next/head'
import React from "react";

interface Meta {
  ({ title, summary, asPath }: {
    title?: string;
    summary?: string;
    asPath?: string;
  }): JSX.Element
}

const siteName = 'ち。'
const siteDescription = 'ち。'
const siteUrl = 'https://www.chi-maru.com'
const regexp =  new RegExp(/<([^>]+)>|&(lt|gt|nbsp|amp);/gi);

const Meta: Meta = (props) => {
  const { title, summary, asPath } = props;
  const pageTitle = `${title ? `${title} | ` : ''}${siteName}`
  const pageSummary = summary ? summary.slice(0, 100) : '';
  const pageDescription = `${pageSummary ? `${pageSummary} | ` : ''}${siteDescription}`;
  const pageUrl = `${siteUrl}${asPath}`

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
    </NextHead>
  )
}

export default Meta;
