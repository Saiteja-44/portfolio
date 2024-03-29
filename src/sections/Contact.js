import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";
import Email from "../assets/mail-1007.svg";
import Phone from "../assets/mobile-phone-709.svg";
import { Github } from "../assets/Svgs/Svj";
import { Linkedin } from "../assets/Svgs/Svj";
import { Twitter } from "../assets/Svgs/Svj";
import { Instagram } from "../assets/Svgs/Svj";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;

  background-color: #e6e6e1;
  color: #2e2e2e;

  position: relative;
  @media (max-width: 48em) {
    justify-content: space-evenly;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "General Sans", sans-serif;
    font-size: 8vw;
  }

  h3 {
    font-family: "General Sans", sans-serif;
    font-size: 2vw;
  }
  @media (max-width: 48em) {
    h1 {
      font-size: 10vw;
    }
    h3{
      font-size: 2.9vw;
    }
`;

const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Emailbox = styled.div`
a{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 15%;
  }

  h4 {
    font-size: 0.9vw;
  }
  :hover {
    transform: scale(1.2);
  }
  @media (max-width: 48em) {
    h4 {
      font-size: 2.5vw;
    }

  }
  @media (max-width: 64em) {
    h4 {
      font-size: 2vw;
    }
  }
`;

const Phonebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 13%;
    width: 15%;
  }

  h4 {
    font-size: 0.9vw;
  }
  :hover {
    transform: scale(1.2);
  }
  @media (max-width: 48em) {
    h4 {
      font-size: 2.5vw;
    }
  }
  @media (max-width: 64em) {
    h4 {
      font-size: 2vw;
    }
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 35%;

  img {
    height: 15%;
    width: 15%;
  }
  @media (max-width: 64em) {
    width: 50%;
    justify-content: space-between;
  }
`;
const Resume = styled.div`
  background-color: #c9c98c;
  color: #fff;
  font-size: 1.6vw;
  height: 4vw;
  width: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  @media (max-width: 64em) {
    width: 45vw;
    height: 7vw;
    font-size: 2.5vw;
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;
  height: 24vh;

  
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 1vw;
    margin-top: 3vw;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 0 1.2vw;
    @media (max-width: 48em) {
      justify-content: center;
    }



  }

  li {
    padding: 1.2vw;
    font-family: "General Sans"
    font-size: 6vw;
    font-weight: 500;
    color:#2e2e2e;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
    }
  }
  @media (max-width: 48em) {
    width: 90vw;
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4vw;
  font-size: 1vw;
  color: #2e2e2e;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    font-size: 2.5vw;
  }
`;
const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    transform: scale(1.2);
  }
`;

const Contact = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section id="Contact">
      <LogoContainer>
        <h3 data-scroll data-scroll-speed="-1">
          Want to Collaborate ?
        </h3>
        <h1 data-scroll data-scroll-speed="-1">
          Get in Touch
        </h1>
      </LogoContainer>

      <Contacts>
        <Emailbox>
          <a href="mailto:saitejap444@gmail.com?subject=Hello">
            <img src={Email} alt="email icon" />
            <h4>saitejap444@gmail.com</h4>
          </a>
        </Emailbox>
        <Phonebox>
          <img src={Phone} alt="Mobile" />
          <h4>1 (562) 542 5449</h4>
        </Phonebox>
      </Contacts>
      <Socials>
        <Link href="https://twitter.com/SaitejaSteja" target={"_blank"}>
          <Twitter width={40} height={40} />
        </Link>
        <Link href="https://www.instagram.com/saiteja_44/" target={"_blank"}>
          <Instagram width={40} height={40} />
        </Link>
        <Link href="https://github.com/Saiteja-44/" target={"_blank"}>
          <Github width={40} height={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sai-teja-polampally-1aa26715b/"
          target={"_blank"}
        >
          <Linkedin width={40} height={40} />
        </Link>
      </Socials>
      <Resume>
        <Link
          href="https://drive.google.com/file/d/198fqWxanNwKuIxXKND_Tvon9ipDYMbyq/view?usp=drive_link"
          target={"_blank"}
        >
          <h4>Resume</h4>
        </Link>
      </Resume>
      <FooterComponent
        initial={{ y: "-400px" }}
        whileInView={{ y: 2 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li aria-hidden="true" onClick={() => handleScroll("#home")}>
            Home
          </li>
          <li aria-hidden="true" onClick={() => handleScroll(".about")}>
            About
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#Skills")}>
            Skills
          </li>
          <li aria-hidden="true" onClick={() => handleScroll("#Projects")}>
            Projects
          </li>
        </ul>
        <Bottom>
          <span>&copy; 2024. All Rights Reserved.</span>
          <span>Sai Teja Polampally</span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Contact;
