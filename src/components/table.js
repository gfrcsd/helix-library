import React from "react"

const Table = ({children, narrow}) => {
    return(
        <div className="columns is-centered">
            <div className="column is-10">
                <div className="table-container">
                    <table className={narrow ? 'table is-fullwidth is-hoverable is-narrow' : 'table is-fullwidth is-hoverable'}>
                        {children}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table