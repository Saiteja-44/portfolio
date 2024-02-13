import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LargeCircle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #9e9e40;
  position: fixed;
  pointer-events: none;
  z-index: 20;
`;

const SmallCircle = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  position: fixed;
  pointer-events: none;
  z-index: 20;
`;

const Cursor = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <LargeCircle
        animate={{ x: cursor.x - 25, y: cursor.y - 25 }}
        transition={{ type: "spring", mass: 3 }}
      />
      <SmallCircle
        animate={{ x: cursor.x - 10, y: cursor.y - 10 }}
        transition={{ type: "spring", mass: 2 }}
      />
    </>
  );
};

export default Cursor;
