import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Heading from "../components/heading"
import Disclaimer from "../components/disclaimer"
import "../sass/style.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/pro-duotone-svg-icons'

export default ({data}) => {
  return (
    <Layout>
      <SEO title="Manuals" description="Links to all the official documentation for your favourite Helix product"/>
      <Heading title="Manuals" subtitle="Download the official documentation" color="light" size="normal"/>
      <Section>
        <div className="columns is-centered is-multiline">
          <div className="column is-10">
            <div className="columns is-centered is-multiline">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="column is-4 has-text-centered">
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid}/>
                  <h2 className="is-size-4">{node.frontmatter.name}</h2>
                  <a href={node.frontmatter.url}>Line 6 Official <FontAwesomeIcon icon={faExternalLink} fixedWidth /></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Disclaimer/>
    </Layout>
  )
}



export const query = graphql` {
  allMarkdownRemark(filter: {fields: {collection: {eq: "manuals"}}}, sort: {fields: frontmatter___date, order: ASC}) {
    edges {
      node {
        id
        frontmatter {
          name
          url
          image {
            childImageSharp {
              fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
}
`