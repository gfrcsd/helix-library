import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Hero from "../components/hero"
import Disclaimer from "../components/disclaimer"
import SEO from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
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
          <div className="column is-5 has-text-centered">
            <GatsbyImage
              image={frontmatter.image.childImageSharp.gatsbyImageData}
              alt={`${frontmatter.brand} ${frontmatter.model}`}
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
                    <span
                      className={`tag is-info has-background-${frontmatter.type
                        .toString()
                        .toLowerCase()
                        .replace(/\//g, "-")}`}
                    >
                      {frontmatter.type}
                    </span>
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
              <span>Edit this page on GitHub</span>
            </a>
          </div>
        </div>
        <hr />
        <div className="columns is-mobile is-vcentered is-justify-content-space-between">
          {previous && (
            <Link
              to={previous.frontmatter.path}
              className="column is-narrow-tablet is-6-mobile mr-auto"
            >
              <div className="columns">
                <div className="column is-narrow is-flex is-align-items-center">
                  {previous.frontmatter?.icon && (
                    <GatsbyImage
                      image={
                        previous.frontmatter.icon.childImageSharp
                          .gatsbyImageData
                      }
                      alt={`${previous.frontmatter.name}'s icon`}
                    />
                  )}
                  {previous.frontmatter?.image && (
                    <GatsbyImage
                      image={
                        previous.frontmatter.image.childImageSharp
                          .gatsbyImageData
                      }
                      alt={`${previous.frontmatter.name}'s icon`}
                    />
                  )}
                </div>
                <div className="column is-narrow">
                  <p>Previous {fields.collection.slice(0, -1)} model</p>
                  <p className="is-size-7">{previous.frontmatter.name}</p>
                </div>
              </div>
            </Link>
          )}
          {next && (
            <Link
              to={next.frontmatter.path}
              className="column is-narrow-tablet is-6-mobile ml-auto"
            >
              <div className="columns is-flex-touch next-nav is-justify-content-flex-end">
                <div className="column is-narrow has-text-right">
                  <p>Next {fields.collection.slice(0, -1)} model</p>
                  <p className="is-size-7">{next.frontmatter.name}</p>
                </div>
                <div className="column is-narrow is-flex is-align-items-center is-justify-content-flex-end">
                  {next.frontmatter?.icon && (
                    <GatsbyImage
                      image={
                        next.frontmatter.icon.childImageSharp.gatsbyImageData
                      }
                      alt={`${next.frontmatter.name}'s icon`}
                    />
                  )}
                  {next.frontmatter?.image && (
                    <GatsbyImage
                      image={
                        next.frontmatter.image.childImageSharp.gatsbyImageData
                      }
                      alt={`${next.frontmatter.name}'s icon`}
                    />
                  )}
                </div>
              </div>
            </Link>
          )}
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
            gatsbyImageData(
              layout: CONSTRAINED
              height: 450
              placeholder: TRACED_SVG
            )
          }
        }
      }
      fields {
        collection
      }
    }
  }
`
