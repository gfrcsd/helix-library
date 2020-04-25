import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import Heading from "../components/heading"

export default ({data}) => {
    return (
        <Layout>
            <Heading title="Effects" subtitle={ data.allMarkdownRemark.totalCount + " available"} />
            <Section>
                <div className="columns is-centered">
                    <div className="column is-10">
                        <table className="table is-fullwidth is-hoverable">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Based on</th>
                                    <th>Type</th>
                                    <th>Channel</th>
                                    <th>Update</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tfoot>
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <tr>
                                    <td>{node.frontmatter.name}</td>
                                    <td>{node.frontmatter.brand}&#174; {node.frontmatter.model}</td>
                                    <td>{node.frontmatter.type}</td>
                                    <td>{node.frontmatter.channel.join(", ")}</td>
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
    allMarkdownRemark(filter: {fields: {collection: {eq: "effects"}}}, sort: {fields: frontmatter___name}) {
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
                    channel
                    update
                }
            }
        }
    }
}
`