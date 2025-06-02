import React from "react";
import './Footer.css'

function Footer(){
    return(
        <div className="footer-container">
            <div className="logo-container">
                <a href="https://github.com/LReed03">
                    <img src="/github.png" alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/landonreed83">
                    <img src="linkedin.png" alt="Linkedin"/>
                </a>
                <button>My Resume</button>
            </div>
            <p>Landon Reed ©2025</p>
        </div>
    )
}

export default Footer;