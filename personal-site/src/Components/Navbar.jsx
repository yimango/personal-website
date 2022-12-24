import React from "react";
import './Navbar.css';

function Navbar(){
    return (
        <div className="navbar">
            <div className="links">
                <a href="Navbar.css" rel="a" to="/"> Home </a>
                <a href="Navbar.css" rel="a" to="/About"> About </a>
                <a href="Navbar.css" rel="a" to="/Projects"> Projects </a>
            </div>
        </div>
    );
}

export default Navbar;