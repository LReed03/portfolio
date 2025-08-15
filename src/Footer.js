import React from "react";
import './Footer.css'
import github from './Images/github.png'
import linkedIn from './Images/linkedin.png'

function Footer(){
    return(
        <div className="footer-container">
            <div className="logo-container">
                <a href="https://github.com/LReed03">
                    <img src={github} alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/landonreed83">
                    <img src={linkedIn} alt="Linkedin"/>
                </a>
            </div>
            <p>Landon Reed ©2025</p>
        </div>
    )
}

export default Footer;