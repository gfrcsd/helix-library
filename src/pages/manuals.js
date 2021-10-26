import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Hero from "../components/hero"
import Disclaimer from "../components/disclaimer"
import "../sass/style.sass"
import { HiOutlineExternalLink } from "react-icons/hi"

const ManualsPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Manuals"
        description="Links to all the official documentation for your favourite Helix product"
      />
      <Hero
        title="Manuals"
        subtitle="Download the official documentation"
        color="light"
        size="normal"
      />
      <Section>
        <div className="columns is-centered is-multiline">
          <div className="column is-10">
            <div className="columns is-centered is-multiline">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div
                  key={node.frontmatter.name}
                  id={node.frontmatter.name.toLowerCase().replace(/ /g, "-")}
                  className="column manual-container is-4 has-text-centered mb-6"
                >
                  <GatsbyImage
                    image={
                      node.frontmatter.image.childImageSharp.gatsbyImageData
                    }
                    alt={node.frontmatter.name}
                  />
                  <h2 className="mb-1 mt-2 is-size-4 is-size-5-mobile">
                    {node.frontmatter.name}
                  </h2>
                  <a href={node.frontmatter.url}>
                    Line 6 Official <HiOutlineExternalLink />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Disclaimer />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "manuals" } } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            url
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`

export default ManualsPage
