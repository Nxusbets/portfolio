import React from "react";
import "../styles/Header.css";


const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Juan Carlos Díaz Mendoza</h1>
            <p className="header-subtitle">Fullstack Developer</p>
            <nav className="header-nav">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
