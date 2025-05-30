import React from "react";
import './Home.css';
import Reveal from "./Reveal";

function Home(){
    return(
        <div className="home">
            <div className="home-container">
                <Reveal direction="left">
                    <h2>My name is Landon Reed</h2>
                </Reveal>
                <Reveal direction="right">
                    <h2>I am a Software Engineering Student</h2>
                </Reveal>
            </div>
        </div>
    );
}

export default Home;
