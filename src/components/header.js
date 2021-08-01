import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GiAmplitude, GiMicrophone, GiAbstract017 } from "react-icons/gi"
import { RiSpeaker3Fill, RiBook2Fill, RiClipboardFill } from "react-icons/ri"

export default function Header({ siteTitle }) {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav
      className="navbar is-black is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            {siteTitle}
          </Link>

          <span
            onClick={() => {
              setisActive(!isActive)
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <div
              id="navbarBasicExample"
              className="navbar-item has-dropdown is-hoverable"
            >
              <p className="navbar-link">Models</p>
              <div className="navbar-dropdown">
                <Link to="/models/amps" className="navbar-item">
                  <GiAbstract017 />
                  <span style={{ paddingLeft: 7 }}>Amps</span>
                </Link>
                <Link to="/models/cabs" className="navbar-item">
                  <RiSpeaker3Fill />
                  <span style={{ paddingLeft: 7 }}>Cabs</span>
                </Link>
                <Link to="/models/effects" className="navbar-item">
                  <GiAmplitude />
                  <span style={{ paddingLeft: 7 }}>Effects</span>
                </Link>
                <Link to="/models/mics" className="navbar-item">
                  <GiMicrophone />
                  <span style={{ paddingLeft: 7 }}>Mics</span>
                </Link>
              </div>
            </div>
            <Link to="/manuals" className="navbar-item">
              <RiBook2Fill />
              <span style={{ paddingLeft: 7 }}>Manuals</span>
            </Link>
            <Link to="/release-notes" className="navbar-item">
              <RiClipboardFill />
              <span style={{ paddingLeft: 7 }}>Release Notes</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
