import React from "react";
import './Navbar.css';


function Navbar(){
    return (
        <div className="navbar">
            <div className="links">
                <a href="/" rel="a" to="/"> Home </a>
                <a href="about" rel="a" to="/About"> About </a>
                <a href="projects" rel="a" to="/Projects"> Projects </a>
            </div>
        </div>
    );
}

export default Navbar;