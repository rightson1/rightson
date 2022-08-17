import React from "react";
import rightson from "../img/rightson.png";
import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = ({ setOpen, open, setSection }) => {
  const variants = {
    open: {
      opacity: 0.8,

      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: { opacity: 0 },
  };
  const linkVariants = {
    open: {
      y: 0,
      scaleX: 1,
    },
    closed: { y: -120, scaleX: 0 },
  };
  const logoVariants = {
    open: {
      y: 0,
    },
    closed: { y: -120 },
  };
  const hamVariant = {
    open: {
      y: 0,
    },
    closed: {
      y: -120,
    },
  };
  const handleClick = (e, value) => {
    e.preventDefault();
    setSection(value);
  };
  return (
    <Container variants={variants} initial="closed" animate="open">
      <motion.div
        className="image"
        variants={logoVariants}
        drag
        style={{ cursor: "pointer" }}
        dragConstraints={{ top: 5, left: 5, bottom: 5, right: 5 }}
      >
        <img src={rightson} alt="" />
      </motion.div>
      <motion.div className="nav-links">
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
          <a href="">About </a>
        </motion.div>
        <motion.div
          className="nav-link"
          variants={linkVariants}
          onClick={(e) => handleClick(e, "education")}
        >
          <a href="">Education </a>
        </motion.div>
        <motion.div
          className="nav-link"
          variants={linkVariants}
          onClick={(e) => handleClick(e, "contact")}
        >
          <a href="">Contact </a>
        </motion.div>
      </motion.div>
      <motion.div
        className={open ? "ham crossed" : "ham"}
        onClick={() => setOpen(!open)}
        variants={hamVariant}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </motion.div>
    </Container>
  );
};
const Container = styled(motion.div)`
  position: fixed;
  display: flex;
  padding: 1rem;
  z-index: 10;
  width: 100%;
  align-items: center;

  height: 5rem;
  justify-content: space-between;
  background-color: black;
  top: 0;
  left: 0;
  .image {
    height: 100%;
    width: 100px;

    img {
      width: 100%;
      height: 80%;
      pointer-events: none;
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    justify-content: flex-end;

    gap: 1rem;
    .nav-link {
      padding: 0.8rem;
      border: 1px solid white;
      border-radius: 1rem 0;
      cursor: pointer;
      position: relative;

      a {
        all: unset;
        color: white;
      }
      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: inherit;
        z-index: -1;
        transform: scale(0);

        transition: 0.3s;
      }
      &:hover {
        border: transparent;
        a {
          color: black;
        }
        &::before {
          transform: scale(1);
          background-color: white;
        }
      }
    }
  }
  .ham {
    display: none;
  }
  .ham {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.7rem;
    width: 50px;
    cursor: pointer;
    height: 50px;
    .line {
      height: 3px;
      background-color: fuchsia;
      &:nth-child(1) {
        width: 30px;
        transition: 0.5s;
        transform-origin: right;
      }
      &:nth-child(2) {
        width: 40px;
        transition: 0.1s;
      }
      &:nth-child(3) {
        width: 30px;
        transition: 0.5s;
        /* transform-origin: right; */
      }
    }
  }
  .ham.crossed {
    .line {
      height: 2px;
      background-color: fuchsia;

      &:nth-child(1) {
        transform: rotate(-45deg);
        width: 40px;
      }
      &:nth-child(2) {
        transform: scaleX(0);
      }
      &:nth-child(3) {
        transform: rotate(405deg);
        width: 35px;
        height: 2.3px;
      }
    }
  }

  @media (max-width: 700px) {
    .nav-links {
      display: none;
    }
    .ham {
      display: flex;
    }
  }
`;

export default Nav;
