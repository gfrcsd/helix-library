import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">{siteTitle}</Link>
        
        <span role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-link">Models</p>
            <div className="navbar-dropdown">
              <Link to="/models/amps" className="navbar-item">Amps</Link>
              <Link to="/models/cabs" className="navbar-item">Cabs</Link>
              <Link to="/models/effects" className="navbar-item">Effects</Link>
              <Link to="/models/mics" className="navbar-item">Mics</Link>
            </div>
          </div>
          <Link to="/manuals" className="navbar-item">Manuals</Link>
          <Link to="/release-notes" className="navbar-item">Release Notes</Link>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
