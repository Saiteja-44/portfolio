import { motion } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import { React } from "react";
import styled from "styled-components";
// import Work from "../components/Workdata";
// import { Github } from "../assets/Svgs/Svj";
import Card from "../components/Card";
import Weather from "../assets/weatherl.png";
import Mfcharts from "../assets/Mfcharts.png";
import Linkedin from "../assets/LinkedinL.png";
import Spotify from "../assets/Spotifycl.png";
// import Cursor from "../components/Cursor";

const Section = styled.section`
  min-height: 220vh;
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid black;
  border-radius: 0%;
  background: #000;
`;

// const Container = styled.div`
//   position: absolute;
//   top: 3%;
//   left: 32.5%;
//   width: 35vw;
//   background-color: #fff;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const Title = styled(motion.h1)`
  font-size: 5vw;
  font-family: "General Sans", sans-serif;
  font-weight: 500;
  color: #969656;
  text-shadow: 1px 1px 1px #9a9a5a;

  position: absolute;
  top: 2%;
  left: 2%;
  z-index: 15;
`;

const Project1 = styled.div`
  position: absolute;
  top: 13%;
  left: 10%;
  width: 40%;
  height: 42%;
  border-radius: 3%;
  @media (max-width: 48em) {
    width: 80%;
    height: 20%;
    top: 8%;
  }
  @media (max-width: 64em) {
    width: 80%;
    height: 25%;
    top: 8%;
  }
`;

const Project2 = styled.div`
  position: absolute;
  top: 18%;
  right: 14%;
  width: 30%;
  height: 31%;
  border-radius: 3%;
  @media (max-width: 48em) {
    width: 80%;
    height: 15%;
    top: 30%;
    right: 10%;
  }
  @media (max-width: 64em) {
    width: 80%;
    height: 20%;
    top: 35%;
    right: 10%;
  }
`;

const Project3 = styled.div`
  position: absolute;
  bottom: 3%;
  left: 12%;
  width: 30%;
  height: 40%;
  border-radius: 3%;
  @media (max-width: 64em) {
    width: 80%;
    height: 18%;
    left: 10%;
    bottom: 24%;
  }
`;

const Project4 = styled.div`
  position: absolute;
  bottom: 3%;
  right: 13%;
  width: 40%;
  height: 42%;
  border-radius: 3%;
  @media (max-width: 64em) {
    width: 80%;
    height: 18%;
    left: 10%;
    bottom: 4%;
  }
`;

const Projects = () => {
  // const [scaling, setscaling] = useState(false);

  return (
    <Section id="Projects" className="panel">
      <Overlay>
        <Title
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
        >
          Projects
        </Title>
        {/* <Cursor scaling={scaling} /> */}
        <Project1
        // onMouseEnter={() => setscaling(true)}
        // onMouseLeave={() => setscaling(false)}
        >
          <Card
            link="https://saiteja-44.github.io/Weather_App/"
            img={Weather}
            alt="Weather"
            name="Weather Application"
            description="It is built on top of React JS, with Openweather API and animations for
                smooth scrolling animations."
            type=" # • React  # •  WeatherAPI  # • CSS"
            git="https://github.com/Saiteja-44/Weather_App"
          />
        </Project1>
        <Project2
        // onMouseEnter={() => setscaling(true)}
        // onMouseLeave={() => setscaling(false)}
        >
          <Card
            link="https://github.com/Saiteja-44/MFCharts"
            img={Mfcharts}
            alt="Mfcharts"
            name="MF Charts"
            description="It is A Mutual Funds potfolio app with a real time Funds Tracker ."
            type="# • React  # •  Node  # • CSS"
            git="https://github.com/Saiteja-44/MFCharts"
          />
        </Project2>
        <Project3
        // onMouseEnter={() => setscaling(true)}
        // onMouseLeave={() => setscaling(false)}
        >
          <Card
            link="https://github.com/Saiteja-44/LinkedIN_Automation"
            img={Linkedin}
            alt="Linkedin"
            name="Linkedin Automation"
            description="It is a tool, built using Python and Selenium to send personalized requests. "
            git="https://github.com/Saiteja-44/LinkedIN_Automation"
            type="# • Python  # •  Selenium  # • WebDriver"
          />
        </Project3>
        <Project4
        // onMouseEnter={() => setscaling(true)}
        // onMouseLeave={() => setscaling(false)}
        >
          <Card
            link="https://github.com/Saiteja-44/Baggage-surveillance-Analytics"
            img={Spotify}
            alt="Surveillance"
            name="Surveillance-Analytics"
            description=" It is used to calculate and analyze the performance of L1-L3 operartors at Airport surveillance"
            type="# • Python  # •  TailwindCSS  # • OpenAPI"
            git="https://github.com/Saiteja-44/Baggage-surveillance-Analytics"
          />
        </Project4>
      </Overlay>
    </Section>
  );
};

export default Projects;
