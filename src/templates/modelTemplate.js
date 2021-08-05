import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Hero from "../components/hero"
import Disclaimer from "../components/disclaimer"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {
  HiOutlineExternalLink,
  HiOutlineDocumentDuplicate,
  HiOutlinePencilAlt,
} from "react-icons/hi"

export default function ModelTemplate({ data, pageContext }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt, fields } = markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <SEO title={frontmatter.name} description={excerpt} />
      <Hero
        title={frontmatter.name}
        subtitle={
          fields.collection.charAt(0).toUpperCase() +
          fields.collection.slice(1, -1)
        }
        color="light"
        size="normal"
      />
      <Section>
        <div className="columns is-centered">
          <div className="column is-5 model-image-container">
            <Img
              style={{ maxHeight: "100%" }}
              imgStyle={{ objectFit: "contain" }}
              fluid={frontmatter.image.childImageSharp.fluid}
            />
          </div>
          <div className="column is-5">
            <p className="has-text-weight-light">Based on</p>
            <h2 className="title is-size-4-mobile has-text-weight-normal">
              {frontmatter.config != null && frontmatter.config}{" "}
              {frontmatter.brand}&#174;{" "}
              {frontmatter.model != null && (
                <span className="has-text-weight-light">
                  {frontmatter.model}
                </span>
              )}
            </h2>
            <div className="field is-grouped is-grouped-multiline">
              {frontmatter.instrument != null && (
                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-dark">Instrument</span>
                    <span className="tag is-info">
                      {frontmatter.instrument}
                    </span>
                  </div>
                </div>
              )}
              {frontmatter.type != null && (
                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-dark">Type</span>
                    <span className="tag is-info">{frontmatter.type}</span>
                  </div>
                </div>
              )}
              {frontmatter.channel != null && (
                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-dark">Channel</span>
                    {frontmatter.channel != null &&
                      frontmatter.channel.map((channel, index) => {
                        return (
                          <span key={index} className="tag is-danger">
                            {channel}
                          </span>
                        )
                      })}
                  </div>
                </div>
              )}
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">Available since</span>
                  <span className="tag is-success">{frontmatter.update}</span>
                </div>
              </div>
            </div>
            <div className="buttons">
              {frontmatter.url.length > 0 && (
                <a
                  href={frontmatter.url}
                  className="button is-dark is-outlined item-url"
                >
                  <span>More Info</span>
                  <span className="icon">
                    <HiOutlineExternalLink
                      style={{ width: "80%", height: "80%" }}
                    />
                  </span>
                </a>
              )}
              {frontmatter.manual != null && frontmatter.manual.length > 0 && (
                <a
                  href={frontmatter.manual}
                  className="button is-dark is-outlined item-url"
                >
                  <span>Manual</span>
                  <span className="icon">
                    <HiOutlineDocumentDuplicate
                      style={{ width: "80%", height: "80%" }}
                    />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="columns is-centered mt-3">
          <div className="column is-10">
            {html != null && (
              <div className="content">
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
              </div>
            )}
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-10">
            <a
              href={
                "https://github.com/gfrcsd/helix-library/tree/master/src/markdown" +
                frontmatter.path +
                ".md"
              }
              className="button is-small is-white is-pulled-right"
            >
              <span className="icon">
                <HiOutlinePencilAlt style={{ width: "75%", height: "75%" }} />
              </span>
              <span>Edit this page</span>
            </a>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-10">
            <hr />
            <div className="level">
              {previous && (
                <div className="level-item level-left">
                  <Link to={previous.frontmatter.path}>
                    <span>Previous {fields.collection.slice(0, -1)} model</span>
                    <br />
                    <p className="is-size-7">{previous.frontmatter.name}</p>
                  </Link>
                </div>
              )}
              {next && (
                <div className="level-item level-right">
                  <Link to={next.frontmatter.path}>
                    <span>Next {fields.collection.slice(0, -1)} model</span>
                    <br />
                    <p className="is-size-7" style={{ textAlign: "end" }}>
                      {next.frontmatter.name}
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
      <Disclaimer />
    </Layout>
  )
}
export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 158, truncate: true, format: PLAIN)
      frontmatter {
        brand
        instrument
        config
        channel
        path
        model
        url
        manual
        name
        type
        update
        image {
          childImageSharp {
            fluid(maxHeight: 450) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fields {
        collection
      }
    }
  }
`
