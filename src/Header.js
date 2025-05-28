import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Header.css';

function Header(){
    return(
        <div className="container">
            <div className="item">
                <Link to="/">Home</Link>
            </div>
            <div className="item">
                <Link to="/Projects">Projects</Link>
            </div>
            <div className="item">
                <Link to="/About">About Me</Link>
            </div>
            <div className="item">
                <Link to="/Contact">Contact Me</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Header