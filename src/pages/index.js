import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../sass/style.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome to Helix library</h1>
          <h2 className="subtitle">Find all the informations about the Helix product line by Line 6</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
