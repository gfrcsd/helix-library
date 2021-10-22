import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Latest() {
  const data = useStaticQuery(graphql`
    query Latest {
      allMarkdownRemark(filter: { frontmatter: { update: { eq: "2.90" } } }) {
        edges {
          node {
            frontmatter {
              brand
              icon {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 100
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
          <h3 className="title is-size-4-mobile has-text-weight-normal">
            Latest Models
          </h3>
          <h4 className="subtitle is-size-5-mobile has-text-weight-light">
            Update 2.90
          </h4>
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-10">
          <div className="columns is-multiline">
            {latestModel.map(({ node }) => (
              <div key={node.frontmatter.name} className="column is-3">
                <div className="card">
                  <div className="card-content">
                    <div className="columns is-mobile">
                      <div className="column is-3">
                        <GatsbyImage
                          image={
                            node.frontmatter.icon.childImageSharp
                              .gatsbyImageData
                          }
                          alt={`${node.frontmatter.name}'s icon`}
                        />
                      </div>
                      <div className="column">
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
                      More info
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
