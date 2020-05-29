import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/section"
import Heading from "../../components/heading"
import Disclaimer from "../../components/disclaimer"

export default ({data}) => {
    return (
        <Layout>
            <SEO title="Amps"/>
            <Heading title="Amps" subtitle={ data.allMarkdownRemark.totalCount + " available"} color="dark" size="medium"/>
            <Section>
                <div className="columns is-centered">
                    <div className="column is-10">
                        <table className="table is-fullwidth is-hoverable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Based on</th>
                                    <th>Instrument</th>
                                    <th>Update</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tfoot>
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <tr>
                                    <td>{node.frontmatter.name}</td>
                                    <td>{node.frontmatter.brand}&#174; {node.frontmatter.model}</td>
                                    <td>{node.frontmatter.instrument}</td>
                                    <td>{node.frontmatter.update}</td>
                                    <td><Link to={node.frontmatter.path}>Details</Link></td>
                                </tr>
                            ))}
                            </tfoot>
                        </table>
                    </div>
                </div>
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
                    url
                    instrument
                    update
                }
            }
        }
    }
}
`