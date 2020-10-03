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


export default ({data}) => {    
    return (
        <Layout>
            <SEO title="Amps" description="Find all the informations you need about the amps available in the Helix products by Line 6&#174;"/>
            <ModelHero title="Amps" subtitle={ data.allMarkdownRemark.totalCount + " available"} color="dark" size="medium"/>
            <Section>
                <FilterButtonContainer filterName="Instrument">
                    <FilterButton toggleItem={"table-row"} buttonName={"All"} />
                    <FilterButton toggleItem={"guitar"} buttonName={"Guitar"} />
                    <FilterButton toggleItem={"bass"} buttonName={"Bass"} />
                </FilterButtonContainer>
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
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <tr className={'table-row ' + node.frontmatter.instrument.toString().toLowerCase()}>
                            <td><Img fixed={node.frontmatter.icon.childImageSharp.fixed}/></td>
                            <td>{node.frontmatter.name}</td>
                            <td>{node.frontmatter.brand}&#174; <span className="has-text-weight-light">{node.frontmatter.model}</span></td>
                            <td>{node.frontmatter.instrument}</td>
                            <td>{node.frontmatter.update}</td>
                            <td><Link className="button is-dark is-outlined" to={node.frontmatter.path}>Details</Link></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Section>
            <Disclaimer/>
        </Layout>
    )
}



export const query = graphql` {
    allMarkdownRemark(filter: {fields: {collection: {eq: "amps"}}}, sort: {fields: frontmatter___name}) {
        totalCount
        edges {
            node {
                id
                frontmatter{
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
                    url
                    instrument
                    update
                }
            }
        }
    }
}
`