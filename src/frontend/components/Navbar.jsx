import React from "react";
import "../styles/Navbar.css";



const Navbar = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="www.github.com/nxusbets">Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="www.linkedin/in/juancarlosdiazmendoza7">Linkedin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">No</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
