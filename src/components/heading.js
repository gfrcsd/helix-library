import React from "react"

const Heading = ({ title, subtitle, color, size }) =>{
    return(
    <div className={title + '-hero model-hero hero is-' + size +' is-' + color + ' is-bold'}>
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-10">
                        <h1 className="title  has-text-weight-normal is-size-4-mobile">{ title }</h1>
                        { subtitle != null && <h2 className="subtitle has-text-weight-light is-size-5-mobile"> {subtitle} </h2>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Heading