import React from "react"
import ReactDom from "react-dom"

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav--tabs">
                <li>Intro</li>
                <li>Projects</li>
                <li>About Me</li>
            </ul>
        </nav>
    )
}

export default Nav