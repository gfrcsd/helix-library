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

    var all = document.getElementsByClassName('table-row');
    var guitar = document.getElementsByClassName('guitar');
    var bass = document.getElementsByClassName('bass');

    function hide(row){
        for (var i = 0; i < row.length; i ++) {
            row[i].style.display = 'none';
        }
    }

    function show(row){
        for (var i = 0; i < row.length; i ++) {
            row[i].style.display = 'table-row';
        }
    }

    function toggle(item){
        hide(all);
        show(item);
    }
    
    return (
        <Layout>
            <SEO title="Amps" description="Find all the informations you need about the amps available in the Helix products by Line 6&#174;"/>
            <Heading title="Amps" subtitle={ data.allMarkdownRemark.totalCount + " available"} color="dark" size="medium"/>
            <Section>
                <div className="columns">
                    <div className="column is-narrow is-offset-1">
                        <div className="buttons">
                            <p className="filter-tag">Instrument:</p>
                            <div className="buttons has-addons" id="instrumentButtons">
                                <buttons onClick={() => toggle(all)} className="button is-small is-active">All</buttons>
                                <buttons onClick={() => toggle(guitar)} className="button is-small">Guitar</buttons>
                                <buttons onClick={() => toggle(bass)} className="button is-small">Bass</buttons>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <tfoot>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <tr className={'table-row ' + node.frontmatter.instrument.toString().toLowerCase()}>
                            <td><Img fixed={node.frontmatter.icon.childImageSharp.fixed}/></td>
                            <td>{node.frontmatter.name}</td>
                            <td>{node.frontmatter.brand}&#174; {node.frontmatter.model}</td>
                            <td>{node.frontmatter.instrument}</td>
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