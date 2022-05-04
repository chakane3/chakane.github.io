import React from "react"
import ReactDom from "react-dom"

function Intro() {
    return (
        <main className="intro">

            <div className="intro--left">
                <h1 className="intro--name">Chakane Shegog</h1>
                <h2 className="intro--occupation">Software Engineer</h2>
                <button className="intro--button">
                    <p>Link to github</p>
                </button>   
            </div>
            
            <div className="intro--right">
                <h2 className="intro--college"> Graduate @ New Jersey Institute of Technology</h2>
                <h2 className="intro--degree">B.S in Business / Concentration in Financial Technology</h2>
            </div>

            
            
        </main>
    )
}

export default Intro