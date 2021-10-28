import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import Section from "../../components/section"
import ModelHero from "../../components/modelHero"
import Disclaimer from "../../components/disclaimer"
import Table from "../../components/table"
import { FaFilter } from "react-icons/fa"

const AmpsPage = ({ data }) => {
  const [amps, setAmps] = useState(data.allMarkdownRemark.edges)
  const [activeFilter, setActiveFilter] = useState("all")

  function filterBy(instrument) {
    if (instrument === "all") {
      setAmps(data.allMarkdownRemark.edges)
      setActiveFilter("all")
    } else {
      setAmps(
        data.allMarkdownRemark.edges.filter(
          (amp) => amp.node.frontmatter.instrument == instrument
        )
      )
      setActiveFilter(instrument)
    }
  }
  return (
    <Layout>
      <SEO
        title="Amps"
        description="Find all the informations you need about the amps available in the Helix products by Line 6&#174;"
      />
      <ModelHero
        title="Amps"
        subtitle={data.allMarkdownRemark.totalCount + " available"}
      />
      <Section>
        <div className="columns">
          <div className="column is-10 is-offset-1 is-hidden-mobile">
            <div className="buttons">
              <p className="filter-tag">
                <FaFilter style={{ paddingTop: "3px" }} /> Instruments
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
                {data.allMarkdownRemark.instruments.map((instrument) => (
                  <button
                    key={instrument}
                    onClick={() => filterBy(instrument)}
                    className={`button is-small is-light ${
                      activeFilter === instrument ? "is-active" : ""
                    }`}
                  >
                    {instrument}
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
                  Filter by Instrument
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
                    {data.allMarkdownRemark.instruments.map((instrument) => (
                      <button
                        key={instrument}
                        onClick={() => filterBy(instrument)}
                        className={`button is-small is-light ${
                          activeFilter === instrument ? "is-active" : ""
                        }`}
                      >
                        {instrument}
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
              <th>Instrument</th>
              <th>Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {amps.map(({ node }) => (
              <tr
                key={node.frontmatter.name}
                className={
                  "table-row " +
                  node.frontmatter.instrument.toString().toLowerCase()
                }
              >
                <td>
                  <GatsbyImage
                    image={
                      node.frontmatter.icon.childImageSharp.gatsbyImageData
                    }
                    alt={`${node.frontmatter.name}'s icon`}
                  />
                </td>
                <td>
                  <Link
                    className="has-text-dark is-underlined"
                    to={node.frontmatter.path}
                  >
                    {node.frontmatter.name}
                  </Link>
                </td>
                <td>
                  {node.frontmatter.brand}&#174;{" "}
                  <span className="has-text-weight-light">
                    {node.frontmatter.model}
                  </span>
                </td>
                <td>{node.frontmatter.instrument}</td>
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
      filter: { fields: { collection: { eq: "amps" } } }
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
            icon {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  height: 45
                  placeholder: TRACED_SVG
                )
              }
            }
            url
            instrument
            update
          }
        }
      }
      instruments: distinct(field: frontmatter___instrument)
    }
  }
`

export default AmpsPage
