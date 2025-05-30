import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Reveal({ children, width = "fit-content", direction = "left" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      setTimeout(() => {
        mainControls.start("visible");
      }, 250);
    }
  }, [isInView]);

  const textVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -75 : 75,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const overlayVariants = {
    hidden: {
      [direction]: 0,
    },
    visible: {
      [direction]: "100%",
    },
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: direction === "left" ? 0 : "auto",
    right: direction === "right" ? 0 : "auto",
    background: "#1a1a1a",
    zIndex: 20,
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75 }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.75 }}
        style={overlayStyle}
      />
    </div>
  );
}

export default Reveal;
