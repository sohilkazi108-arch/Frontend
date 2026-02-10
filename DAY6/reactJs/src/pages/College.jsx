import React from "react";
import { NavLink, Outlet } from "react-router";

function College(){
    return(
        <div>
            <h1>hii i am College page</h1>
            <nav>
                <NavLink to="department">Department</NavLink>
                <NavLink to="info">Info</NavLink>
                <NavLink to="details">Details</NavLink>
                <br />

            </nav>
            <Outlet/>
        </div>
    )
}
export default College