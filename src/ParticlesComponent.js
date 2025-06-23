import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";


function ParticlesComponent(props){

  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
        fullScreen: {
        enable: false,  
        zIndex: -1     
            },
        fpsLimit: 60,
        interactivity: {
            events: {
            onHover: {
                enable: true,
                mode: 'grab',
            },
            },
            modes: {
            grab: {
                distance: 150,
            },
            },
        },
        particles: {
            color: {
            value:["#FFFFFF", "rgb(129, 32, 28)", "rgb(9, 41, 131)"],
            },
            links: {
            color: "#FFFFFF",
            distance: 150,
            enable: false,
            opacity: .4,
            width: 1,
            },
            move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 0.83,
            straight: false,
            },
            number: {
            density: {
                enable: true,
            },
            value: 250,
            },
            opacity: {
            value: 1.0,
            },
            shape: {
            type: "circle",
            },
            size: {
            value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
        }),
        [],
    );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;