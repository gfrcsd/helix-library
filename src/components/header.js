import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmpGuitar, faSpeaker, faMicrophoneStand, faWaveformPath, faBooks, faClipboard } from '@fortawesome/pro-duotone-svg-icons'

export default function Header({ siteTitle }) {
  const [isActive, setisActive] = React.useState(false)

  return(
    <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">{siteTitle}</Link>

          <span onClick={() => {setisActive(!isActive)}} role="button" class={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <div id='navbarBasicExample' className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">Models</p>
              <div className="navbar-dropdown">
                <Link to="/models/amps" className="navbar-item"><FontAwesomeIcon icon={faAmpGuitar} pull="left"  fixedWidth /> Amps</Link>
                <Link to="/models/cabs" className="navbar-item"><FontAwesomeIcon icon={faSpeaker} pull="left" rotation={90}  fixedWidth /> Cabs</Link>
                <Link to="/models/effects" className="navbar-item"><FontAwesomeIcon icon={faWaveformPath} pull="left"  fixedWidth /> Effects</Link>
                <Link to="/models/mics" className="navbar-item"><FontAwesomeIcon icon={faMicrophoneStand} pull="left"  fixedWidth /> Mics</Link>
              </div>
            </div>
            <Link to="/manuals" className="navbar-item"><FontAwesomeIcon icon={faBooks} pull="left" fixedWidth /> Manuals</Link>
            <Link to="/release-notes" className="navbar-item"><FontAwesomeIcon icon={faClipboard} pull="left" fixedWidth /> Release Notes</Link>
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
