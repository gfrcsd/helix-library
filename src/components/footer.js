import React from "react"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <p>{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer