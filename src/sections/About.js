import React from "react";
import styled from "styled-components";
import img1 from "../assets/mainimage.png";
import img2 from "../assets/imagep2.jpeg";
import img3 from "../assets/sidedown.jpeg";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  display: flex;
  position: relative;
  margin: 0 auto;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: 7vw;
  font-family: "General Sans", sans-serif;
  font-weight: 500;
  color: #9a9a5a;
  position: absolute;
  top: 1%;
  left: 2%;
  z-index: 5;
  @media (max-width: 64em) {
    font-size: 5vw;
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: 8vw;
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: 1.4vw;
  font-family: "Cabinet Grotesk", sans-serif;
  font-weight: 400;
  position: relative;
  right: 7%;
  z-index: 5;
  margin-top: 18%;

  @media (max-width: 64em) {
    width: 80%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    color: #ffffce;

    padding: 2rem;
    font-weight: 500;
    font-size: 2.5vw;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.25)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: 3vw;
    color: #ffffce;
  }
  @media (max-width: 30em) {
    font-size: 3.8vw;
    color: #ffffce;
    padding: 2rem;
    width: 70%;
  }
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
    border-radius: 2%;
  }
  .small-img-1 {
    width: 30%;
    position: absolute;
    left: 94%;
    top: 30%;
    border-radius: 2%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 10%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
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
