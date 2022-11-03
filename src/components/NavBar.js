import React from "react";
import Widget from "./Widget";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({isInHeader}) => {
    return(
        <nav className="navbar">
            <h1>
                <Link className="links" to="/">
                    Amoblamientos Bahía
                </Link>
            </h1>
            <ul>
                <NavLink className="links" to="/categoria/Cocina"> Cocina</NavLink>
                <NavLink className="links" to="/categoria/Dormitorio">Dormitorio</NavLink>
                <NavLink className="links" to="/categoria/Oficina">Oficina</NavLink>
            </ul>
            <Link className="links">
                <Widget/>
            </Link>
        </nav>
    )
}

export default NavBar;