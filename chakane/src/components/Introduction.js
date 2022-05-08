import React from "react"
import ReactDom from "react-dom"
//  Create a flex box for both left and right sides
// wrap whats above in another flexbox
function Intro() {
    return (
        <main className="intro">

            <div className="intro--left">
                <h1 className="intro--name">Chakane Shegog</h1>
                <h2 className="intro--college"> Graduate @ New Jersey Institute of Technology</h2>
                
                
            </div>
            
            <div className="intro--right">
                <h2 className="intro--occupation">Software Engineer</h2>
                <h3 className="intro--degree">B.S in Business / Concentration in Financial Technology</h3>
                {/* <p id="intro--quote">“You can fail at what you don't want, so you might as well take a chance on doing what you love.” 
― Jim Carrey</p> */}
            </div>

            <div id="intro--button">
                <button className="intro--btn">
                    <a href="https://github.com/chakane3">Link to github</a>
                </button>   
            </div>
            
       
           
     
            
            
        </main>
    )
}

export default Intro