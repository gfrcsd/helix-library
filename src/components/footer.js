import React from "react"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="content has-text-centered">
                <p>&#169; {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer