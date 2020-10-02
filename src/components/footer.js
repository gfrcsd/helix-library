import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/pro-duotone-svg-icons'

export default function Footer() {
    const data = useStaticQuery(graphql`
        query footerQuery {
            allMdx(limit: 5, sort: {order: DESC, fields: frontmatter___date}) {
                nodes {
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    `)
    return(
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    <div className="column is-3 has-text-grey">
                        <p><b className="has-text-grey-dark has-text-weight-semibold">Helix Library</b> by <a href="https://github.com/gfrcsd">gfrcsd <FontAwesomeIcon size="sm" icon={faExternalLink} fixedWidth /></a></p>
                        <p>Source code licensed <a href="https://opensource.org/licenses/gpl-3.0.html">GPL-3.0 <FontAwesomeIcon size="sm" icon={faExternalLink} fixedWidth /></a></p>
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
                            <li><Link to="/manuals">Helix</Link></li>
                            <li><Link to="/manuals">Helix Rack</Link></li>
                            <li><Link to="/manuals">Helix Native</Link></li>
                            <li><Link to="/manuals">Helix LT</Link></li>
                            <li><Link to="/manuals">HX Effects</Link></li>
                            <li><Link to="/manuals">HX Stomp</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <p className="has-text-dark" to="/release-notes">Release Notes</p>
                        <ul className="footer-list">
                        {data.allMdx.nodes.map(({ frontmatter }) => (
                            <li><Link to={frontmatter.path}>{'Version ' + frontmatter.title}</Link></li>
                        ))}
                            <li><Link className="has-text-grey" to="/release-notes">View all</Link></li>
                        </ul>
                    </div>
                    <div className="column">
                        <p><b className="has-text-dark has-text-weight-semibold">Contribute</b> on GitHub</p>
                        <iframe className="mt-1" src="https://ghbtns.com/github-btn.html?user=gfrcsd&repo=helix-library&type=star&count=false&v=2" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}