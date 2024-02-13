import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Container = styled.section`
  position: fixed;
  top: 0;
  left: 1%;
  display: flex;
  justify-content: space-between;

  width: 100%;
  color: ${(props) => props.theme.text};
  z-index: 7;

  a {
    display: flex;
    align-items: center;
    width: 15%;
  }

  svg {
    width: 3.5rem;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke: #444;
    stroke-width: 3px;
    g {
      path {
        stroke: #000;
      }
    }
  }
`;

const NavContainer = styled(motion.div)`
  width: 40%;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  list-style-type: none;

  li {
    font-family: "Cabinet Grotesk", sans-serif;
    font-weight: 700;
    font-size: 1.5 em;
    cursor: pointer;
  }
`;

const ConnectBtn = styled(motion.div)`
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(to right, #000 50%, #9e9e40 50%);
  background-size: 200% 100%;
  border-radius: 50px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const Text = styled(motion.span)`
  font-size: 2.1em;
  font-family: "General Sans", sans-serif;
  font-weight: 700;
  padding-bottom: 0.1rem;
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
      delay: 4,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: 4,
    y: -40,
  },
  visible: {
    opacity: 1,
    x: 4,
    y: 0,

    transition: {
      duration: 1,
      delay: 5, // 2
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Container>
      <Link to="/">
        {/* <img src={star} alt="Wibe Fashion" /> */}
        <svg
          width="85"
          height="76"
          viewBox="0 0 85 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      </Link>
      <NavContainer variants={textVariants} initial="hidden" animate="visible">
        <motion.li
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll(".about")}
        >
          about
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#Skills")}
        >
          skills
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
          onClick={() => handleScroll("#Projects")}
        >
          projects
        </motion.li>
        <ConnectBtn
          whileHover={{ scale: 1.1, backgroundPosition: "100%" }}
          whiletap={{ scale: 0.9, Y: 0 }}
          onClick={() => handleScroll("#Contact")}
        >
          Let's Connect
        </ConnectBtn>
      </NavContainer>
    </Container>
  );
};

export default Logo;
