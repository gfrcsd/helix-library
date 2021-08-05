import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import Section from "../../components/section"
import ModelHero from "../../components/modelHero"
import Disclaimer from "../../components/disclaimer"
import Table from "../../components/table"
import FilterButtonContainer from "../../components/filterButtonContainer"
import FilterButton from "../../components/filterButton"

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Effects"
        description="Find all the informations you need about the effects available in the Helix products by Line 6&#174;"
      />
      <ModelHero
        title="Effects"
        subtitle={data.allMarkdownRemark.totalCount + " available"}
      />
      <Section>
        <FilterButtonContainer filterName="Type">
          <FilterButton toggleItem={"table-row"} buttonName={"All"} />
          <FilterButton toggleItem={"delay"} buttonName={"Delay"} />
          <FilterButton toggleItem={"distortion"} buttonName={"Distortion"} />
          <FilterButton toggleItem={"dynamics"} buttonName={"Dynamics"} />
          <FilterButton toggleItem={"eq"} buttonName={"EQ"} />
          <FilterButton toggleItem={"filter"} buttonName={"Filter"} />
          <FilterButton toggleItem={"looper"} buttonName={"Looper"} />
          <FilterButton toggleItem={"modulation"} buttonName={"Modulation"} />
          <FilterButton toggleItem={"pitch/synth"} buttonName={"Pitch/Synth"} />
          <FilterButton toggleItem={"reverb"} buttonName={"Reverb"} />
          <FilterButton toggleItem={"split"} buttonName={"Split"} />
          <FilterButton toggleItem={"volume/pan"} buttonName={"Volume/Pan"} />
          <FilterButton toggleItem={"wah"} buttonName={"Wah"} />
        </FilterButtonContainer>
        <Table narrow="true">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Based on</th>
              <th>Type</th>
              <th>Channel</th>
              <th>Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <tr
                key={node.frontmatter.name}
                className={
                  "table-row " + node.frontmatter.type.toString().toLowerCase()
                }
              >
                <td>
                  <Img fixed={node.frontmatter.icon.childImageSharp.fixed} />
                </td>
                <td>{node.frontmatter.name}</td>
                <td>
                  {node.frontmatter.brand}&#174;{" "}
                  <span className="has-text-weight-light">
                    {node.frontmatter.model}
                  </span>
                </td>
                <td>{node.frontmatter.type}</td>
                <td>{node.frontmatter.channel.join(", ")}</td>
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
      filter: { fields: { collection: { eq: "effects" } } }
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
                fixed(height: 45) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            type
            url
            channel
            update
          }
        }
      }
    }
  }
`
