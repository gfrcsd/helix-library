import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Disclaimer from "../components/disclaimer"
import "../sass/style.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Disclaimer/>
    <div className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
              <h1 className="title">Welcome to Helix library</h1>
              <h2 className="subtitle">A trove of informations about the Helix product line by Line 6®</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
