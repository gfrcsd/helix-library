import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Heading from "../components/heading"

export default ({data}) => {
    return (
        <Layout>
            <Heading title="Cabs" subtitle={ data.allMarkdownRemark.totalCount + " available"} />
            <Section>
                <div className="columns is-centered">
                    <div className="column is-10">
                        <table className="table is-fullwidth is-hoverable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Based on</th>
                                    <th>Instrument</th>
                                    <th>Speakers</th>
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
                                    <td>{node.frontmatter.config}</td>
                                    <td>{node.frontmatter.update}</td>
                                    <td><Link to={node.frontmatter.path}>Details</Link></td>
                                </tr>
                            ))}
                            </tfoot>
                        </table>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}



export const query = graphql` {
    allMarkdownRemark(filter: {fields: {collection: {eq: "cabs"}}}, sort: {fields: frontmatter___name}) {
        totalCount
        edges {
            node {
                id
                frontmatter{
                    name
                    path
                    brand
                    model
                    instrument
                    url
                    config
                    update
                }
            }
        }
    }
}
`