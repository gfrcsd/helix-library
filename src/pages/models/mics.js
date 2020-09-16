import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/section"
import Heading from "../../components/heading"
import Disclaimer from "../../components/disclaimer"
import Table from "../../components/table"
import FilterButton from "../../components/filterButton"

export default ({data}) => {
    return (
        <Layout>
            <SEO title="Mics" description="Find all the informations you need about the mics available in the Helix products by Line 6&#174;"/>
            <Heading title="Mics" subtitle={ data.allMarkdownRemark.totalCount + " available"} color="dark" size="medium"/>
            <Section>
                <div className="columns">
                    <div className="column is-narrow is-offset-1">
                        <div className="buttons">
                            <p className="filter-tag">Type:</p>
                            <div className="buttons has-addons" id="instrumentButtons">
                                <FilterButton toggleItem={"table-row"} buttonName={"All"} />
                                <FilterButton toggleItem={"condenser"} buttonName={"Condenser"} />
                                <FilterButton toggleItem={"dynamic"} buttonName={"Dynamic"} />
                                <FilterButton toggleItem={"ribbon"} buttonName={"Ribbon"} />
                            </div>
                        </div>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Based on</th>
                            <th>Type</th>
                            <th>Update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tfoot>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <tr className={'table-row ' + node.frontmatter.type.toString().toLowerCase()}>
                            <td>{node.frontmatter.name}</td>
                            <td>{node.frontmatter.brand}&#174; {node.frontmatter.model}</td>
                            <td>{node.frontmatter.type}</td>
                            <td>{node.frontmatter.update}</td>
                            <td><Link className="button" to={node.frontmatter.path}>Details</Link></td>
                        </tr>
                    ))}
                    </tfoot>
                </Table>
            </Section>
            <Disclaimer/>
        </Layout>
    )
}



export const query = graphql` {
    allMarkdownRemark(filter: {fields: {collection: {eq: "mics"}}}, sort: {fields: frontmatter___name}) {
        totalCount
        edges {
            node {
                id
                frontmatter{
                    name
                    path
                    brand
                    model
                    type
                    url
                    update
                }
            }
        }
    }
}
`