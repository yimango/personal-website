import React from "react";
import TypeAnimation from "./Components/TypeAnimation";
import Navbar from "./Components/Navbar";

function Home(){
    return(
    <div className="App">
        <div className='top'>
        <header className="App-header">
            <Navbar />
        </header>
        </div>
        <div className='bottom'>
        <h1 className='body'>Hi! I'm Justin!</h1>
        <TypeAnimation className='subtitle' message={"I am a full stack software developer"}/>
        </div>
        </div>
    )
}

export default Home