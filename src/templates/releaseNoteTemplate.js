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
      tableOfContents
    }
  }
`

const ReleaseNoteTemplate = ({ data: { mdx: post } }) => {
  const { title, date, target, path } = post.frontmatter
  const { body, excerpt, tableOfContents } = post
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
        <div className="columns is-centered is-variable is-4">
          <div className="column is-3-tablet is-2-desktop is-hidden-mobile">
            <aside className="menu sticky-navigation">
              <ul className="menu-list">
                <p className="menu-label">Table of contents</p>
                <ul className="menu-list">
                  {tableOfContents.items.map((item) => (
                    <li>
                      <a key={item.title} href={item.url}>
                        {item.title}
                      </a>
                      {item.items && (
                        <ul>
                          {item.items.map((item) => (
                            <li>
                              <a key={item.title} href={item.url}>
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </ul>
            </aside>
          </div>
          <div className="column is-9-tablet is-8-desktop content">
            <div className="tags has-addons">
              <span className="tag is-dark">Update for:</span>
              {target.map((item, index) => {
                return (
                  <span key={index} className="tag is-success">
                    {item}
                  </span>
                )
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
              <span>Edit this page on GitHub</span>
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default ReleaseNoteTemplate
