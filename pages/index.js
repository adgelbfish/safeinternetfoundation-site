import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from "react-helmet"
import {config} from 'config'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Help people reclaim the internet!
        </h1>
        <p>
          People should be getting what they are trying to get! People pay for an internet connection to gain access to
          content and services that they need or want, but are then inundated by unwanted content and services. The
          goal of the Safe Internet Foundation is to keep the unwanted content "out of the package deal".
        </p>
      </div>
    )
  }
}
