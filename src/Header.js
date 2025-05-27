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
                <a href="">Projects</a>
            </div>
            <div className="item">
                <a href="">About Me</a>
            </div>
            <div className="item">
                <a href="">Contact</a>
            </div>
            <Outlet/>
        </div>
    );
};

export default Header