import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainVideo from "../assets/Background.mp4";
import { motion } from "framer-motion";
import landing from "../assets/Landingimg.png";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
`;

const Landing = styled(motion.div)`
  position: absolute;
  bottom:5%;
  left 4%;
  width: 35%;
  height: 30 %;
  z-index: 4;

  object-fit: contain;

  img{
    max-width: 100%;
  }
  @media (max-width: 30em) {
    top:30%;
    left: 12%;
    width: 80%;
    height: 80 %;
  }
  @media (min-width: 31em) and (max-width: 48em) {
    top:20%;
    left: 19%;
    width: 60%;
    height: 60%;
    
  }
  @media (min-width: 49em) and (max-width: 64em) {
    top:20%;
    left: 19%;
    width: 60%;
    height: 60%;
    
  }



`;
const Title = styled.div`
  position: absolute;
  bottom: 15%;
  right: 3%;
  z-index: 5;
  width: 65%;
  height: 25%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  @media (max-width: 48em) {
    right:5%;
    bottom: 10%;
    width: 90%;
  }
  @media (min-width: 49em) and (max-width: 64em) {
    bottom: 10%;
    width: 90%;
  }



  h1 {
    font-family: "General Sans", sans-serif;
    font-weight: 700;
    font-size: 5vw;
    text-shadow: 2px 2px 2px ${(props) => props.theme.body};

    @media (max-width: 48em) {
      font-size: 9vw;
    }
    @media (min-width: 49em) and (max-width: 64em) {
      font-size: 8vw;
    }
  }

  h2 {
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 6px;
    -webkit-text-stroke-color: #86863a;
    font-family: "General Sans";
    font-size: 5vw;
    font-style: normal;
    font-weight: 900;
    line-height: normal;

    @media (max-width: 48em) {
      font-size: 9.5vw);
      -webkit-text-stroke-width: 2px;
    }
    @media (min-width: 49em) and (max-width: 64em) {
      font-size: 8vw;
    }
  }
`;
const introVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      delay: 5, // 2
      ease: "easeInOut",
    },
  },
};

const zoomInOutVariants2 = {
  initial: {
    scale: 1.4, // Zoom in initially
  },
  animate: {
    scale: 1.0,
    transition: {
      duration: 2,
      delay: 4,
    },
  },
};
const CoverVideo = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "WEB DEVELOPER",
    "SOFTWARE DEV. ",
    "UI/UX DESIGNER",
    "CLOUD ARCHITECT",
  ];
  const period = 1500;

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(300);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]); // Added delta here

  return (
    <VideoContainer>
      <Landing>
        <motion.img
          variants={zoomInOutVariants2}
          initial="initial"
          animate="animate"
          src={landing}
          alt="Landingimg"
        />
      </Landing>
      <Title>
        <motion.h1 variants={introVariants} initial="hidden" animate="visible">
          HEY, I'M SAITEJA
        </motion.h1>
        <motion.h2 variants={introVariants} initial="hidden" animate="visible">
          A {text},
        </motion.h2>
      </Title>
      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
