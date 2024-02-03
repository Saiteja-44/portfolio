import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { motion } from "framer-motion";

import img1 from "../assets/react.png";
import img2 from "../assets/angularjs.png";
import img3 from "../assets/javascript.png";
import img4 from "../assets/typescript.png";
import img5 from "../assets/postgresql.svg";
import img6 from "../assets/mongodb.svg";
import img7 from "../assets/kubernetes.svg";
import img8 from "../assets/aws.svg";
import img9 from "../assets/file-type-docker.svg";
import img10 from "../assets/java.png";
import img11 from "../assets/sass.png";
import img12 from "../assets/icons8-git.svg";
import img13 from "../assets/net.png";
import img14 from "../assets/python.svg";
import img15 from "../assets/icons8-azure.svg";
import img16 from "../assets/icons8-mysql.svg";
import img17 from "../assets/icons8-tailwind-css.svg";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
`;
const Title = styled.h1`
  font-size: 5vw;
  font-family: "General Sans", sans-serif;
  font-weight: 500;
  text-shadow: 1px 1px 1px #9e9e40;
  color: #969656;

  position: absolute;
  top: 0.75%;
  left: 1%;
  z-index: 11;
`;
const Left = styled.div`
  width: 30%;
  background-color: #fff;
  color: #000;

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.4vw;
    font-family: "Cabinet Grotesk", sans-serif;
    font-weight: 400;
    width: 80%;
    margin-top: 5%;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 30%;
  min-height: 100vh;

  padding-left: 30%;
  background-color: #d1d1b2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  /* background-color: black; */
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    font-family: "Cabinet Grotesk", sans-serif;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.9 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="Skills">
      <Title data-scroll data-scroll-speed="-1">
        Skills
      </Title>
      <Left>
        <p>
          I am proficient with a variety of skills which help you build and
          maintain your web applications. I have expertise in a wide range of
          technologies, including React, Angular, .NET, JavaScript, TypeScript,
          Java, Spring Boot, Python, Tailwind CSS, Node.js, AWS Services,
          Postgres and MongoDB, Git, Docker, and Kubernetes. <br />
          <br />
          I’m committed to providing high-quality services that meet your needs
          and exceed your expectations. If you’re interested in working with me,
          please don’t hesitate to get in touch!
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img1} title="React.js" />
        <Product img={img2} title="Angular.js" />
        <Product img={img13} title=".Net" />
        <Product img={img3} title="JavaScript" />
        <Product img={img4} title="TypeScript" />
        <Product img={img10} title="Java" />
        <Product img={img14} title="Python" />
        <Product img={img8} title="AWS" />
        <Product img={img15} title="Azure" />
        <Product img={img5} title="PostgreSQL" />
        <Product img={img16} title="MySQL" />
        <Product img={img6} title="MongoDB" />
        <Product img={img9} title="Docker" />
        <Product img={img7} title="Kubernetes" />
        <Product img={img17} title="Tailwind CSS" />
        <Product img={img11} title="SASS" />
        <Product img={img12} title="Git" />
      </Right>
    </Section>
  );
};

export default Services;
