import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Disclaimer from "../components/disclaimer"
import Numbers from "../components/numbers"
import Latest from "../components/latest"
import "../sass/style.sass"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10 has-text-centered">
              <h1 className="title has-text-weight-normal is-size-4-mobile">Welcome to Helix library</h1>
              <h2 className="subtitle has-text-weight-light is-size-5-mobile">A trove of informations about the Helix product line by Line 6®</h2>
            </div>
          </div>
          <div className="columns is-centered mt-6">
            <div className="column is-8">
              <Numbers />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Section>
      <Latest />
    </Section>
    <Disclaimer/>
  </Layout>
)

export default IndexPage
