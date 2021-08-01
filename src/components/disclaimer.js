import React from "react"
import { AiTwotoneWarning } from "react-icons/ai"
import { HiOutlineExternalLink } from "react-icons/hi"

const Disclaimer = () => {
  return (
    <div className="hero is-small is-warning">
      <div className="hero-body has-text-centered is-size-7-mobile">
        <p>
          <b className="has-text-weight-semibold has-text-black">
            <span className="icon">
              <AiTwotoneWarning />
            </span>
            Disclaimer:{" "}
          </b>
          this website has no affiliation with Line 6® or any of the companies
          mentioned. For official documentation and support, visit{" "}
          <a className="has-text-link" href="https://line6.com/helix/">
            Line 6 <HiOutlineExternalLink />
          </a>
        </p>
      </div>
    </div>
  )
}

export default Disclaimer
