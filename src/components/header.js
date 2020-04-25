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
          <Link to="/amps" className="navbar-item">Amps</Link>
          <Link to="/cabs" className="navbar-item">Cabs</Link>
          <Link to="/effects" className="navbar-item">Effects</Link>
          <Link to="/mics" className="navbar-item">Mics</Link>
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
