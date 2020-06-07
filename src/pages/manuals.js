import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Heading from "../components/heading"
import Disclaimer from "../components/disclaimer"
import "../sass/style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/pro-duotone-svg-icons'


const ManualsPage = () => (
  <Layout>
    <SEO title="Manuals" />
    <Heading title="Manuals" subtitle="Download the official documentation" color="light" size="normal"/>
    <Section>
      <div className="columns is-multiline">
        <div className="column is-one-third has-text-centered">
          <h2 className="is-size-4">Helix</h2>
          <a href="https://line6.com/support/manuals/helix/">Line 6 Official <FontAwesomeIcon icon={faExternalLink} fixedWidth /></a>
        </div>
        <div className="column is-one-third has-text-centered">
          <h2 className="is-size-4">Helix Rack</h2>
          <a href="https://line6.com/support/manuals/helix-rack/">Line 6 Official <FontAwesomeIcon icon={faExternalLink} fixedWidth /></a>
        </div>
        <div className="column is-one-third has-text-centered">
          <h2 className="is-size-4">Helix Native</h2>
          <a href="https://line6.com/support/manuals/helix-native/">Line 6 Official <FontAwesomeIcon icon={faExternalLink} fixedWidth /></a>
        </div>
        <div className="column is-one-third has-text-centered">
          <h2 className="is-size-4">Helix LT</h2>
          <a href="https://line6.com/support/manuals/helixlt/">Line 6 Official <FontAwesomeIcon icon={faExternalLink} fixedWidth /></a>
        </div>
        <div className="column is-one-third has-text-centered">
          <h2 className="is-size-4">Helix Effects</h2>
          <a href="https://line6.com/support/manuals/hxeffects/">Line 6 Official <FontAwesomeIcon icon={faExternalLink} fixedWidth /></a>
        </div>
        <div className="column is-one-third has-text-centered">
          <h2 className="is-size-4">Helix Stomp</h2>
          <a href="https://line6.com/support/manuals/hxstomp/">Line 6 Official <FontAwesomeIcon icon={faExternalLink} fixedWidth /></a>
        </div>
      </div>
    </Section>
    <Disclaimer/>
  </Layout>
)

export default ManualsPage
  