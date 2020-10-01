import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
      <div className="hero is-medium is-light is-bold">
        <div className="hero-body has-text-centered">
          <h1 className="title has-text-weight-normal has-text-weight-normal is-size-1">404</h1>
          <h2 className="subtitle has-text-weight-light is-size-3 is-size-6-mobile">Page not found</h2>
          <Link to="/" className="button">Back to homepage</Link>
        </div>
      </div>
  </Layout>
)

export default NotFoundPage
