// src/components/layout.js
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Section from "../components/section"
import { HiOutlinePencilAlt } from "react-icons/hi"

export const query = graphql`
  query ($pathSlug: String!) {
    mdx(frontmatter: { path: { eq: $pathSlug } }) {
      frontmatter {
        title
        path
        date(formatString: "MMMM Do YYYY")
        target
      }
      body
      excerpt(truncate: true, pruneLength: 158)
    }
  }
`

const ReleaseNoteTemplate = ({ data: { mdx: post } }) => {
  const { title, date, target, path } = post.frontmatter
  const { body, excerpt } = post
  return (
    <Layout>
      <SEO title={title + " Release Note"} description={excerpt} />
      <Hero
        title={"Release Note " + title}
        subtitle={date}
        color="light"
        size="normal"
      />
      <Section>
        <div className="columns is-centered">
          <div className="column is-10 content">
            <div className="tags has-addons">
              <span className="tag is-dark">Update for:</span>
              {target.map((item) => {
                return <span className="tag is-success">{item}</span>
              })}
            </div>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-10">
            <a
              href={
                "https://github.com/gfrcsd/helix-library/tree/master/src/markdown" +
                path +
                ".mdx"
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
      </Section>
    </Layout>
  )
}

export default ReleaseNoteTemplate
