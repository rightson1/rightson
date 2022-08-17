import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
const Education = ({ section, setSection }) => {
  const scroll = useRef();
  useEffect(() => {
    if (section === "education") {
      scroll.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setSection("");
    }
  });
  const drag = { top: 5, left: 5, bottom: 5, right: 5 };
  const [index, setIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex(index > 0 ? index - 60 : 0);
    } else {
      setIndex(index <= 700 ? index + 60 : 0);
    }
  };

  return (
    <Container index={index} ref={scroll}>
      <motion.div
        className="head"
        style={{
          y: 100,
          scaleX: 0.3,
        }}
        whileInView={{
          y: 0,
          scaleX: 1,

          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
      >
        <motion.div className="line"> </motion.div>
        <h1>
          {" "}
          <span className="number">2.</span>
          Rights<span>on</span>'s Education <span>Background</span>
        </h1>
      </motion.div>
      <motion.div
        className="animate"
        style={{ y: 100, scaleX: 0 }}
        whileInView={{
          y: 0,
          scaleX: 1,

          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
      >
        <motion.div
          className="container"
          animate={{
            x: `${-index}px`,
          }}
          whileInView={{
            opacity: 1,

            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          }}
        >
          <div className="carosel">
            <h3>Highschool</h3>
            <p>
              I went to chavakali highschool, Kenya(western),it was pretyy fun
              but with some few challenges here abd there. Anyways i did not die
              :)
            </p>
          </div>
          <div className="carosel">
            <h3>University</h3>
            <p>
              Still in University, second Yeah student pursuing computer science
              and trying to figure out what to do with my life
            </p>
          </div>
          <div className="carosel">
            <h3>Certificates</h3>
            <p>
              I have three freecode camp certificates, that is Web design,
              Javasript Algorithm and Data Structures Certification, Front End
              Development Libraries Certification and finally a cisco javascript
              certificate
            </p>
          </div>
        </motion.div>
      </motion.div>
      <div className="controls">
        <motion.div
          style={{
            x: -100,
            scaleX: 0,
          }}
          onClick={() => handleClick("left")}
          whileInView={{
            x: 0,
            scaleX: 1,

            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          }}
          whileTap={{
            scale: 1.2,
          }}
          drag
          dragConstraints={drag}
          className="cicle1 circle"
        >
          <AiFillCaretLeft />
        </motion.div>
        <motion.div
          style={{
            x: 100,
            scaleX: 0,
          }}
          onClick={() => handleClick("right")}
          drag
          dragConstraints={drag}
          whileInView={{
            x: 0,
            scaleX: 1,

            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          }}
          whileTap={{
            scale: 1.2,
          }}
          className="cicle2 circle"
        >
          <AiFillCaretRight className="svg" />
        </motion.div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 5rem 4rem;
  margin: 6rem;
  overflow-x: hidden;
  min-height: 60vh;
  opacity: 0.8;
  .container {
    display: flex;

    .carosel {
      min-width: 300px;
      padding: 2rem;
      border: 2px solid white;
      margin: 2rem;
      font-family: "Handlee";
      max-width: 350px;
    }
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    .circle {
      height: 50px;
      width: 50px;
      border: 2px solid white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: fuchsia;
        border: none;
        svg {
          color: red;
        }
      }
    }
  }
  .head {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    .line {
      width: 5rem;
      height: 1px;
      background-color: white;
    }
    h1 {
      font-size: 1.4rem;
      font-weight: 500;
      font-family: "Handlee";
      span {
        color: fuchsia;
        margin-right: 0.3rem;
      }
    }
  }
  @media (max-width: 600px) {
    margin: 3rem 1rem;
    .head {
      h1 {
        font-size: 1.3rem;
      }
    }
  }
  @media (min-width: 1200px) {
    .controls {
      display: none;
    }
    .container {
      .carosel {
        width: 250px;
      }
    }
  }
`;
export default Education;
