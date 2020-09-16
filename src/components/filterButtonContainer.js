import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/pro-solid-svg-icons'

export default ({filterName, children}) => {
    return (
        <div className="columns">
        <div className="column is-narrow is-offset-1 is-hidden-mobile">
            <div className="buttons">
                <p className="filter-tag"><FontAwesomeIcon icon={faFilter} /> {filterName}</p>
                <div className="buttons has-addons">
                    {children}
                </div>
            </div>
        </div>
        <div className="column is-hidden-desktop">
            <div className="columns">
                <div className="column is-fullwidth is-narrow">
                    <p className="filter-tag"><FontAwesomeIcon icon={faFilter} />Filter by {filterName}</p>
                </div>
                <div className="column">
                    <div className="buttons">
                        <div className="buttons has-addons">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}