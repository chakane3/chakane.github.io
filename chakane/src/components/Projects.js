import React from "react"
import ReactDom from "react-dom"

function Projects() {
    return (
        <div className="projects">
            <div className="projects--proj1">
                <p>find cheap ammo</p>
                <iframe src="https://giphy.com/embed/cVOp9kRugipjSAkf1A" width="236" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                {/* <p className="projects--description">This project came from an problem I stumbled on where I noticed there were mulltiple websites selling the same brands of ammunition at different prices.</p> */}

                
            </div >
            
            <div className="projects--proj2">
                <p>This project </p>
                <iframe src="https://giphy.com/embed/OMU8kYGKOWFIEYdosa" width="236" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>

            
        </div>
    )
}

export default Projects