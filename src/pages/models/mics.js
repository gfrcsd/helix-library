import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Section from "../../components/section"
import ModelHero from "../../components/modelHero"
import Disclaimer from "../../components/disclaimer"
import Table from "../../components/table"
import FilterButtonContainer from "../../components/filterButtonContainer"
import FilterButton from "../../components/filterButton"

export default ({data}) => {
    return (
        <Layout>
            <SEO title="Mics" description="Find all the informations you need about the mics available in the Helix products by Line 6&#174;"/>
            <ModelHero title="Mics" subtitle={ data.allMarkdownRemark.totalCount + " available"} color="dark" size="medium"/>
            <Section>
                <FilterButtonContainer filterName="Type">
                    <FilterButton toggleItem={"table-row"} buttonName={"All"} />
                    <FilterButton toggleItem={"condenser"} buttonName={"Condenser"} />
                    <FilterButton toggleItem={"dynamic"} buttonName={"Dynamic"} />
                    <FilterButton toggleItem={"ribbon"} buttonName={"Ribbon"} />
                </FilterButtonContainer>
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
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <tr className={'table-row ' + node.frontmatter.type.toString().toLowerCase()}>
                            <td><Img fixed={node.frontmatter.image.childImageSharp.fixed}/></td>
                            <td>{node.frontmatter.name}</td>
                            <td>{node.frontmatter.brand}&#174; {node.frontmatter.model}</td>
                            <td>{node.frontmatter.type}</td>
                            <td>{node.frontmatter.update}</td>
                            <td><Link className="button" to={node.frontmatter.path}>Details</Link></td>
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
                    image {
                        childImageSharp {
                            fixed(width: 45) {
                            ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    }
}
`