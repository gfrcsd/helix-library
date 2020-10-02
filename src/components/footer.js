import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/pro-duotone-svg-icons'

export default function Footer() {
    const data = useStaticQuery(graphql`
        query footerQuery {
            footerReleasenotes: allMdx(limit: 6, sort: {order: DESC, fields: frontmatter___date}) {
                nodes {
                    frontmatter {
                        title
                        path
                    }
                }
            }
            footerManuals: allMarkdownRemark(filter: {fields: {collection: {eq: "manuals"}}}) {
                nodes {
                    frontmatter {
                        name
                    }
                }
            }
        }
    `)
    return(
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="column is-3 has-text-grey has-text-weight-light">
                        <p><b className="has-text-grey-dark has-text-weight-normal">Helix Library</b> by <a href="https://github.com/gfrcsd">gfrcsd</a></p>
                        <p>Source code licensed <a href="https://opensource.org/licenses/gpl-3.0.html">GPL-3.0</a></p>
                        <p>Made with <a href="https://gatsbyjs.com/">Gatsby</a> & <a href="https://bulma.io">Bulma</a></p>
                        <p>Hosted on <a href="https://www.netlify.com/">Netlify</a></p>
                    </div>
                    <div className="column is-1">
                        <Link className="has-text-dark" to="/">Home</Link>
                    </div>
                    <div className="column">
                        <p className="has-text-dark">Models</p>
                        <ul className="footer-list">
                            <li><Link to="/models/amps">Amps</Link></li>
                            <li><Link to="/models/cabs">Cabs</Link></li>
                            <li><Link to="/models/effects">Effects</Link></li>
                            <li><Link to="/models/mics">Mics</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <p className="has-text-dark">Manuals</p>
                        <ul className="footer-list">
                        {data.footerManuals.nodes.map(({ frontmatter }) => (
                            <li><Link to={'/manuals#' + frontmatter.name.toString().toLowerCase().replace(/ /g, '-')}>{frontmatter.name}</Link></li>
                        ))}
                            <li><Link className="has-text-grey" to="/manuals">View all</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <p className="has-text-dark" to="/release-notes">Release Notes</p>
                        <ul className="footer-list">
                        {data.footerReleasenotes.nodes.map(({ frontmatter }) => (
                            <li><Link to={frontmatter.path}>{'Version ' + frontmatter.title}</Link></li>
                        ))}
                            <li><Link className="has-text-grey" to="/release-notes">View all</Link></li>
                        </ul>
                    </div>
                    <div className="column has-text-weight-light">
                        <p><b className="has-text-dark has-text-weight-normal">Contribute</b> on GitHub</p>
                        <iframe className="mt-1" src="https://ghbtns.com/github-btn.html?user=gfrcsd&repo=helix-library&type=star&count=false&v=2" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}