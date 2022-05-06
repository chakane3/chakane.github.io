import React from "react"
import ReactDom from "react-dom"

function Projects() {
    return (
        <div className="projects">
            <p className="projects--cheapAmmo">Find Cheap Ammo</p>
            <iframe className="projects--proj1" src="https://giphy.com/embed/cVOp9kRugipjSAkf1A" width="236" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
            <iframe className="projects--proj2" src="https://giphy.com/embed/OMU8kYGKOWFIEYdosa" width="236" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
            <div className="projects--proj3">Project 3</div>
        </div>
    )
}

export default Projects