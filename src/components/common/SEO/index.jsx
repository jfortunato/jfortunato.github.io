import React from 'react'
import Helmet from 'react-helmet'
import Thumbnail from 'assets/thumbnail/thumbnail.png'
import {
  defaultDescription,
  defaultTitle,
} from 'data/config'

export const SEO = ({
  title = defaultTitle,
  description = defaultDescription,
  location = '',
}) => {

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={Thumbnail} />

      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  )
}
