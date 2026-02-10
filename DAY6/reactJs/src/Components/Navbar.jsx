import React from "react";
import { Link } from "react-router";
function Navbar(){
    return(
        <div>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/college">College</Link>

              
        </div>
    )
}

export default Navbar