import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Disclaimer from "../components/disclaimer"
import Section from "../components/section"
import Hero from "../components/hero"

const ReleaseNotesPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Release Notes"
        description="Release notes for all the updates available for the family of Helix products"
      />
      <Hero
        title="Release Notes"
        subtitle={data.allMdx.totalCount + " published"}
        color="light"
        size="normal"
      />
      <Section>
        <div className="release-note columns is-centered is-variable is-4">
          <div className="column is-2 is-hidden-mobile">
            <aside className="menu sticky-navigation">
              <ul className="menu-list">
                <p className="menu-label">Navigation</p>
                {data.allMdx.edges.map(({ node }) => (
                  <li key={node.frontmatter.title}>
                    <a href={"#" + node.frontmatter.title}>
                      Version {node.frontmatter.title}
                    </a>
                  </li>
                ))}
                <div className="bottom-gradient"></div>
              </ul>
            </aside>
          </div>
          <div className="column is-8">
            {data.allMdx.edges.map(({ node }) => (
              <div key={node.frontmatter.title} className="columns is-centered">
                <div
                  id={node.frontmatter.title}
                  className="column content headings"
                >
                  <h3 className="title is-size-4">
                    Version {node.frontmatter.title}
                  </h3>
                  <h4 className="subtitle is-size-6 has-text-weight-normal has-text-grey">
                    released on {node.frontmatter.date}
                  </h4>
                  <ul>
                    {node.headings.map(({ value }) => (
                      <li key={value}>{value}</li>
                    ))}
                  </ul>
                  <p className="is-hidden-mobile">{node.excerpt}</p>
                  <Link
                    className="button is-dark is-outlined is-hidden-mobile mt-2"
                    to={node.frontmatter.path}
                  >
                    Read more
                  </Link>
                  <Link
                    className="button is-fullwidth is-dark is-outlined is-hidden-desktop mt-5"
                    to={node.frontmatter.path}
                  >
                    Read more
                  </Link>
                  <hr className="mb-0 mt-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Disclaimer />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            path
            date(formatString: "MMMM Do YYYY")
            target
          }
          headings(depth: h1) {
            value
          }
          excerpt(pruneLength: 300, truncate: false)
        }
      }
    }
  }
`

export default ReleaseNotesPage
