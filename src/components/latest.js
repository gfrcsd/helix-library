import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Latest() {
  const data = useStaticQuery(graphql`
    query Latest {
      allMarkdownRemark(filter: { frontmatter: { update: { eq: "3.10" } } }) {
        edges {
          node {
            frontmatter {
              brand
              icon {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 128
                    placeholder: TRACED_SVG
                  )
                }
              }
              name
              path
              model
              instrument
              type
              update
            }
            fields {
              collection
            }
          }
        }
      }
    }
  `)

  const latestModel = data.allMarkdownRemark.edges

  return (
    <div>
      <div className="columns is-centered">
        <div className="column is-10">
          <h3 className="title is-size-4-mobile has-text-weight-normal mb-3">
            Latest Models
          </h3>
          <div className="tags has-addons">
            <span className="tag is-dark">Update</span>
            <span className="tag is-success">3.10</span>
          </div>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-10">
          <div className="columns is-multiline">
            {latestModel.map(({ node }) => (
              <div
                key={node.frontmatter.name}
                className="column is-4-tablet is-3-desktop"
              >
                <div className="card">
                  <div className="card-content">
                    <div className="columns is-mobile is-multiline">
                      <div className="column is-one-third-mobile is-12-tablet is-3-desktop">
                        <GatsbyImage
                          image={
                            node.frontmatter.icon.childImageSharp
                              .gatsbyImageData
                          }
                          alt={`${node.frontmatter.name}'s icon`}
                        />
                      </div>
                      <div className="column is-two-thirds-mobile">
                        <h5 className="title has-text-weight-normal is-5">
                          {node.frontmatter.name}
                        </h5>
                        <h6 className="subtitle has-text-weight-light is-6">
                          {node.frontmatter.type} {node.frontmatter.instrument}{" "}
                          {node.fields.collection.slice(0, -1)}
                        </h6>
                      </div>
                    </div>
                    <Link
                      className="button is-dark is-fullwidth is-outlined"
                      to={node.frontmatter.path}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
