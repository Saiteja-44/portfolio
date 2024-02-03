import React from "react";
import styled from "styled-components";
import img1 from "../assets/Imagep1.png";
import img2 from "../assets/imagep2.jpeg";
import img3 from "../assets/Imagep3.jpeg";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  display: flex;
  position: relative;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 8vw;
  font-family: "General Sans", sans-serif;
  font-weight: 500;
  color: #9a9a5a;
  position: absolute;
  top: 1%;
  left: 2%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: 1.4vw;
  font-family: "Cabinet Grotesk", sans-serif;
  font-weight: 400;
  position: relative;
  right: 5%;
  z-index: 5;
  margin-top: 18%;
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-2 {
    width: 40%;
    position: absolute;
    right: 70%;
    bottom: 20%;
  }
  .small-img-1 {
    width: 30%;
    position: absolute;
    left: 94%;
    top: 30%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Hi there! I’m a creative software developer who loves coming up with new
        ideas and solving problems. I believe that technology can have a
        positive impact on people’s lives, and I’m passionate about using my
        skills to make a difference in the world.
        <br />
        <br /> When I’m not coding, I enjoy traveling 🌍 and meeting people from
        different cultures. I love trekking and playing cricket , and I’m always
        up for watching a good movie . I believe that experiencing new things
        and learning from others is the best way to grow as a person.
        <br />
        <br />
        I believe a good laugh is the ultimate bug fix, and I'm on a mission to
        infect the world with smiles, one witty comment at a time. 😊 So, if
        you're looking for a coding comrade who can build epic apps hit me up!
        Let's craft something awesome, together. 🤝
        <br />
        <br />
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="-5"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img3}
          className="small-img-2"
          alt="About Us"
        />
      </Right>
    </Section>
  );
};

export default About;
