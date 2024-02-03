import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }

  svg {
    height: 25%;
    overflow: visible;
    width: 100%;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke: #fff;
    stroke-width: 3px;
    g {
      path {
        stroke: #000;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: "easeInOut",
    },
  },
};

const Text = styled(motion.span)`
  font-size: 5em;
  color: #000;
  padding-top: 0.5rem;
  font-family: "General Sans", sans-serif;
  font-weight: 700;

  @media (max-width: 48em) {
    font-size: 6em;
  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90 90"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M72.26 51.7303C69.7935 53.9356 65.7939 53.9356 63.3274 51.7303L52.4377 41.9932C49.9707 39.7878 49.9707 36.2121 52.4377 34.0066L63.3274 24.2698C65.7939 22.0643 69.7935 22.0643 72.26 24.2698L83.1501 34.0066C85.6166 36.2121 85.6166 39.7878 83.1501 41.9932L72.26 51.7303ZM21.6724 51.7303C19.2058 53.9356 15.2065 53.9356 12.7399 51.7303L1.85 41.9932C-0.616662 39.7878 -0.616667 36.2121 1.84999 34.0066L12.7399 24.2698C15.2065 22.0643 19.2058 22.0643 21.6724 24.2698L32.5623 34.0066C35.029 36.2121 35.029 39.7878 32.5623 41.9932L21.6724 51.7303ZM46.9664 74.3457C44.4995 76.5514 40.5003 76.5514 38.0337 74.3457L27.1438 64.609C24.6771 62.4037 24.6771 58.8276 27.1438 56.6222L38.0337 46.8855C40.5003 44.6798 44.4995 44.6798 46.9664 46.8855L57.8562 56.6222C60.3227 58.8276 60.3227 62.4037 57.8562 64.609L46.9664 74.3457ZM46.9664 29.1146C44.4995 31.32 40.5003 31.3201 38.0337 29.1146L27.1438 19.3777C24.6771 17.1722 24.6771 13.5964 27.1438 11.3909L38.0337 1.65412C40.5003 -0.551369 44.4995 -0.551373 46.9664 1.65411L57.8562 11.3909C60.3227 13.5964 60.3227 17.1722 57.8562 19.3777L46.9664 29.1146Z"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        stp
      </Text>
    </Container>
  );
};

export default Loader;
