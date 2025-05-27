import React from "react";
import './Header.css';

function Header(){
    return(
        <div className="container">
            <div className="item">
                <a href="">Home</a>
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
        </div>
    );
};

export default Header