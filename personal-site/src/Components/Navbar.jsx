import { Link } from "@mui/material";
import React from "react";
import './Navbar.css';

function Navbar(){
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/projects"> Projects </Link>
            </div>
        </div>
    );
}

export default Navbar;