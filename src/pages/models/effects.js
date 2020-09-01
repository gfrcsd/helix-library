import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import Section from "../../components/section"
import Heading from "../../components/heading"
import Disclaimer from "../../components/disclaimer"
import Table from "../../components/table"

export default ({data}) => {
    return (
        <Layout>
            <SEO title="Effects"/>
            <Heading title="Effects" subtitle={ data.allMarkdownRemark.totalCount + " available"} color="dark" size="medium"/>
            <Section>
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
                    <tfoot>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <tr>
                            <td><Img fixed={node.frontmatter.icon.childImageSharp.fixed}/></td>
                            <td>{node.frontmatter.name}</td>
                            <td>{node.frontmatter.brand}&#174; {node.frontmatter.model}</td>
                            <td>{node.frontmatter.type}</td>
                            <td>{node.frontmatter.channel.join(", ")}</td>
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