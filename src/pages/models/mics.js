import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/section"
import ModelHero from "../../components/modelHero"
import Disclaimer from "../../components/disclaimer"
import Table from "../../components/table"
import { FaFilter } from "react-icons/fa"

const MicsPage = ({ data }) => {
  const [mics, setMics] = useState(data.allMarkdownRemark.edges)
  const [activeFilter, setActiveFilter] = useState("all")

  function filterBy(type) {
    if (type === "all") {
      setMics(data.allMarkdownRemark.edges)
      setActiveFilter("all")
    } else {
      setMics(
        data.allMarkdownRemark.edges.filter(
          (effect) => effect.node.frontmatter.type == type
        )
      )
      setActiveFilter(type)
    }
  }

  return (
    <Layout>
      <SEO
        title="Mics"
        description="Find all the informations you need about the mics available in the Helix products by Line 6&#174;"
      />
      <ModelHero
        title="Mics"
        subtitle={data.allMarkdownRemark.totalCount + " available"}
      />
      <Section>
        <div className="columns">
          <div className="column is-10 is-offset-1 is-hidden-mobile">
            <div className="buttons">
              <p className="filter-tag">
                <FaFilter style={{ paddingTop: "3px" }} /> Types
              </p>
              <div className="buttons has-addons">
                <button
                  onClick={() => filterBy("all")}
                  className={`button is-small is-light ${
                    activeFilter === "all" ? "is-active" : ""
                  }`}
                >
                  All
                </button>
                {data.allMarkdownRemark.types.map((type) => (
                  <button
                    key={type}
                    onClick={() => filterBy(type)}
                    className={`button is-small is-light ${
                      activeFilter === type ? "is-active" : ""
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="column is-hidden-desktop">
            <div className="columns">
              <div className="column is-fullwidth is-narrow">
                <p className="filter-tag">
                  <FaFilter style={{ paddingTop: "3px" }} />
                  Filter by Types
                </p>
              </div>
              <div className="column">
                <div className="buttons">
                  <div className="buttons has-addons">
                    <button
                      onClick={() => filterBy("all")}
                      className={`button is-small is-light ${
                        activeFilter === "all" ? "is-active" : ""
                      }`}
                    >
                      All
                    </button>
                    {data.allMarkdownRemark.types.map((type) => (
                      <button
                        key={type}
                        onClick={() => filterBy(type)}
                        className={`button is-small is-light ${
                          activeFilter === type ? "is-active" : ""
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Table narrow="true">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Based on</th>
              <th>Type</th>
              <th>Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mics.map(({ node }) => (
              <tr
                key={node.frontmatter.name}
                className={
                  "table-row " + node.frontmatter.type.toString().toLowerCase()
                }
              >
                <td>
                  <GatsbyImage
                    image={
                      node.frontmatter.image.childImageSharp.gatsbyImageData
                    }
                    alt={`${node.frontmatter.name}'s icon`}
                  />
                </td>
                <td>{node.frontmatter.name}</td>
                <td>
                  {node.frontmatter.brand}&#174;{" "}
                  <span className="has-text-weight-light">
                    {node.frontmatter.model}
                  </span>
                </td>
                <td>{node.frontmatter.type}</td>
                <td>{node.frontmatter.update}</td>
                <td>
                  <Link
                    className="button is-dark is-outlined"
                    to={node.frontmatter.path}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>
      <Disclaimer />
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "mics" } } }
      sort: { fields: frontmatter___name }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            name
            path
            brand
            model
            type
            url
            update
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 45
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
      }
      types: distinct(field: frontmatter___type)
    }
  }
`
export default MicsPage
