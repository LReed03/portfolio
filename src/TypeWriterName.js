import React from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import Typewriter from "typewriter-effect";
import './TypeWriterName.css'

function TypeWritterName(){
    return(
        <div className="typewriter">
            <Typewriter options={{strings: ['My name is Landon Reed', 'I am a software engineering student'],
                autoStart: true,
                loop: true
            }}
            />
        </div>
    )
}

export default TypeWritterName;