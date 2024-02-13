import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;
  background-color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: blue; */
  position: relative;
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  }
`;

const Banner = styled.h1`
  font-size: 4.5vw;
  font-family: "General Sans";
  color: #fff;
  /* position: absolute; */
  white-space: nowrap;
  line-height: 1;

  span.box {
    display: block;
    background-color: #111;

    padding: 1rem 2rem;
  }

  span.word {
    color: #9a9a5a;
    display: "inline";
  }
`;

const Marquee = () => {
  return (
    <Section>
      <Container id="direction">
        <Banner>
          <span
            className="box"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#direction"
          >
            I{" "}
            <motion.span
              className="word"
              initial={{ color: "#fff" }}
              whileInView={{ color: "#9e9e40" }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              belive
            </motion.span>{" "}
            in pushing
          </span>
        </Banner>
        <Banner
          data-scroll
          data-scroll-speed="-2"
          data-scroll-target="#direction"
        >
          <span
            className="box"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#direction"
          >
            the boundaries of what's possible
          </span>
        </Banner>
        <Banner>
          <span
            className="box"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#direction"
          >
            in{" "}
            <motion.span
              className="word"
              initial={{ color: "#fff" }}
              whileInView={{ color: "#9e9e40" }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              software
            </motion.span>
            {""} by consistently
          </span>
        </Banner>
        <Banner>
          <span
            className="box"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#direction"
          >
            delivering solutions
          </span>
        </Banner>
        <Banner
          data-scroll
          data-scroll-speed="6"
          data-scroll-target="#direction"
        >
          <span
            className="box"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="5"
            data-scroll-target="#direction"
          >
            that surpass expectations in all aspects.
          </span>
        </Banner>
      </Container>
    </Section>
  );
};

export default Marquee;
