import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github } from "../assets/Svgs/Svj";

const Box = styled(motion.li)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4%;
  overflow: hidden;
  img {
    width: 100%;
    height: 75%;
    border-radius: 4%;
    transition: transform 0.2s ease;
  }
`;
const Title = styled.h2`
  font-family: "General Sans", sans-serif;
  font-size: 1.5vw;
  text-align: center;
  margin-top: 2px;
  color: #fff;
`;

const Description = styled.h2`
  font-size: 1vw;
  font-family: "Cabinet Grotesk", sans-serif;
  font-weight: 500;
  color: #fff;
`;
const Tags = styled.div`
  border-top: 2px solid #fff;
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid #fff;
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
  color: #fff;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
`;

const Link = styled.a`
  background-color: #202020;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 3%;
  font-size: 1.5vw;

  ${Box}:hover & {
    background-color: #d1d1b2;
    color: #000;
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  & > * {
    fill: #202020;
  }
  ${Box}:hover & {
    & > * {
      fill: #d1d1b2;
    }
  }
`;

const Card = ({ name, img, alt, type, link, description, git }) => {
  return (
    <Box>
      <img src={img} alt={alt} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        <Tag>{type}</Tag>
      </Tags>
      <Footer>
        <Link href={link} target="_blank">
          Visit
        </Link>
        <Git href={git} target="_blank">
          <Github width={40} height={40} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
