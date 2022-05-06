import React from "react"
import ReactDom from "react-dom"
import selfie from "./selfie.png"
import ohio from "./ohio.png"

function AboutMe() {
    return (
        <div className="aboutMe">
            <img className="ohio" src={ohio}></img>
            <img className="seflie" src={selfie} alt="selfie"></img>
        </div>
    )
}

export default AboutMe