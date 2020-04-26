import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Disclaimer from "../components/disclaimer"
import Section from "../components/section"
import Heading from "../components/heading"

export default ({data}) => {
    return(
        <Layout>
            <SEO title="Release Notes"/>
            <Heading title="Release Notes" subtitle={data.allMdx.totalCount + ' published'}/>
            <Section>
                {data.allMdx.edges.map(({ node }) => (
                    <div className="columns is-centered">
                        <div className="column is-10">
                            <h3 class="title is-size-4">Version {node.frontmatter.title}</h3>
                            <h4 class="subtitle is-size-6">released on {node.frontmatter.date}</h4>
                            <Link to={node.frontmatter.path}>Read more</Link>
                        </div>
                    </div>
                    
                ))}
            </Section>
            <Disclaimer />
        </Layout>
    )
}

export const query = graphql`{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    path
                    date(formatString: "MMMM Do YYYY")
                    target
                }
            }
        }
    }
}
`