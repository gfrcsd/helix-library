import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/pro-solid-svg-icons'

export default ({filterName, children}) => {
    return (
        <div className="columns">
        <div className="column is-narrow is-offset-1">
            <div className="buttons">
                <p className="filter-tag"><FontAwesomeIcon icon={faFilter} /> {filterName}</p>
                <div className="buttons has-addons">
                    {children}
                </div>
            </div>
        </div>
    </div>
    )
}