import React from "react"
import ReactDom from "react-dom"
import Navigation from "./components/Navigation"
import Intro from "./components/Introduction"
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import "../src/style.css"


export default function App() {
    return (
        <div className="main">
            {/* <Navigation /> */}
            <Intro />
            <Projects />
            {/* <AboutMe /> */}
            <Footer />

        </div>
    )
}

ReactDom.render(<App />, document.getElementById("root"))