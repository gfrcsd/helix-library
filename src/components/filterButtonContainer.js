import React from "react"
import { FaFilter } from "react-icons/fa"

export default ({ filterName, children }) => {
  return (
    <div className="columns">
      <div className="column is-10 is-offset-1 is-hidden-mobile">
        <div className="buttons">
          <p className="filter-tag">
            <FaFilter style={{ paddingTop: "3px" }} /> {filterName}
          </p>
          <div className="buttons has-addons">{children}</div>
        </div>
      </div>
      <div className="column is-hidden-desktop">
        <div className="columns">
          <div className="column is-fullwidth is-narrow">
            <p className="filter-tag">
              <FaFilter style={{ paddingTop: "3px" }} />
              Filter by {filterName}
            </p>
          </div>
          <div className="column">
            <div className="buttons">
              <div className="buttons has-addons">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
