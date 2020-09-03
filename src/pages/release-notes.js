import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/pro-duotone-svg-icons'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Disclaimer from "../components/disclaimer"
import Section from "../components/section"
import Heading from "../components/heading"

export default ({data}) => {
    const [isActive, setisActive] = React.useState(false)
    return(
        <Layout>
            <SEO title="Release Notes" description="Release notes for all the updates available for the family of Helix products"/>
            <Heading title="Release Notes" subtitle={data.allMdx.totalCount + ' published'} color="light" size="normal"/>
            <Section>
                <div className="release-note columns is-centered">
                    <div className="column is-2 is-hidden-mobile">
                        <aside className="menu">
                            <ul className="menu-list">
                                <p className="menu-label">Navigation</p>
                            {data.allMdx.edges.map(({ node }) => (
                                <li>
                                    <a href={'#' + node.frontmatter.title}>Version {node.frontmatter.title}</a>
                                </li>
                            ))}
                            </ul>
                        </aside>
                    </div>
                    <div className="column is-8">
                    {data.allMdx.edges.map(({ node }) => (
                        <div className="columns is-centered">
                            <div id={node.frontmatter.title} className="column is-10 content headings">
                                <h3 class="title is-size-4">Version {node.frontmatter.title}</h3>
                                <h4 class="subtitle is-size-6 has-text-weight-normal">released on {node.frontmatter.date}</h4>
                                <ul className="is-hidden-mobile">
                                {node.headings.map(({ value }) => (
                                    <li>{value}</li>
                                ))}
                                </ul>
                                <p className="is-hidden-mobile">{node.excerpt}</p>
                                <Link style={{selfAlign:'right'}} className="button is-info" to={node.frontmatter.path}>Read more</Link>
                                <hr/>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
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
                headings(depth: h1) {
                    value
                }
                excerpt(pruneLength: 300, truncate: false)
            }
        }
    }
}
`