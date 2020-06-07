import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/pro-duotone-svg-icons'

const Disclaimer = () => {
    return(
        <div className="hero is-small is-warning">
            <div className="hero-body has-text-centered">
                <p><b className="has-text-black">Disclaimer:</b> this website has no affiliation with Line 6® or any of the companies mentioned. For official documentation and support, visit <a className="has-text-link" href="https://line6.com/helix/">Line 6 <FontAwesomeIcon icon={faExternalLink} fixedWidth /></a></p>
            </div>
        </div>
    )
}

export default Disclaimer