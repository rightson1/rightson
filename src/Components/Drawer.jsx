import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Drawer = ({ close, open, setSection }) => {
  const handleClick = (e, value) => {
    e.preventDefault();
    setSection(value);
  };
  const containerVariants = {
    animate: {
      x: 0,
      scaleX: 1,
    },
    initial: { x: -1200, scaleX: 0 },
  };

  const linkVariants = {
    animate: {
      y: 0,
      opacity: 1,
    },
    initial: { y: -50, opacity: 0 },
  };

  const linksVariants = {
    animate: {
      scaleY: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
        origin: "top",
        delayChildren: 0.3,
      },
    },
    initial: { opacity: 0, scaleY: 0 },
  };

  return (
    <Container
      onClick={close}
      style={{ display: !open && "none" }}
      variants={containerVariants}
      initial={!open ? "animate" : "initial"}
      animate={open ? "animate" : "initial"}
      open
    >
      <motion.div className="container" variants={linksVariants}>
        <motion.div
          className="nav-link"
          variants={linkVariants}
          onClick={(e) => handleClick(e, "home")}
        >
          <a href="">Home</a>
        </motion.div>
        <motion.div
          className="nav-link"
          variants={linkVariants}
          onClick={(e) => handleClick(e, "about")}
        >
          <a href="">About Me</a>
        </motion.div>
        <motion.div
          className="nav-link"
          variants={linkVariants}
          onClick={(e) => handleClick(e, "education")}
        >
          <a href="">Education</a>
        </motion.div>
        <motion.div
          className="nav-link"
          variants={linkVariants}
          onClick={(e) => handleClick(e, "contact")}
        >
          <a href="">Contact Me</a>
        </motion.div>
      </motion.div>
    </Container>
  );
};
const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(100, 0, 100, 0.3);
  z-index: 3;

  .container {
    position: absolute;
    bottom: 20%;
    left: -1px;
    width: 200px;
    height: 300px;
    border: 1px solid #bab86c;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.9);
    .nav-link {
      margin-bottom: 1rem;
      position: relative;
      transition: 1s;
      cursor: pointer;
      a {
        all: unset;
        font-size: 1.2rem;
      }
      &::before {
        position: absolute;
        content: "";
        bottom: -1rem;
        left: 0;
        height: 3px;
        width: 0px;
        background: linear-gradient(
          300.81deg,
          #554dde -17.99%,
          #f44e77 111.32%,
          #f44e77 111.32%
        );
        transition-duration: 1s;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
`;
export default Drawer;
