import React from "react"
import { IoWarning } from "react-icons/io5"
import { HiOutlineExternalLink } from "react-icons/hi"

const Disclaimer = () => {
  return (
    <div className="hero is-small is-warning">
      <div className="hero-body has-text-centered is-size-7-mobile">
        <p style={{ lineHeight: "1.5rem" }}>
          <b className="icon-text has-text-weight-semibold has-text-black mr-1">
            <span className="icon">
              <IoWarning style={{ fontSize: "1.3rem" }} />
            </span>
            <span>Disclaimer: </span>
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
