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
        zIndex: 0     
            },
        background: {
            color: {
          
        },
      },
        fpsLimit: 120,
        interactivity: {
            events: {
            onClick: {
                enable: true,
                mode: "repulse",
            },
            onHover: {
                enable: true,
                mode: 'grab',
            },
            },
            modes: {
            push: {
                distance: 150,
                duration: 15,
            },
            grab: {
                distance: 150,
            },
            },
        },
        particles: {
            color: {
            value: "#FFFFFF",
            },
            links: {
            color: "#FFFFFF",
            distance: 150,
            enable: true,
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
            value: 425,
            },
            opacity: {
            value: 1.0,
            },
            shape: {
            type: "",
            },
            size: {
            value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
        }),
        [],
    );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;