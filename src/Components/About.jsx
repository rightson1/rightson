import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import mypic from "../img/mypic.jpg";
import { DiReact, DiJavascript1 as Javascript, DiSass } from "react-icons/di";
import { AiFillHtml5 as Html } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiStyledcomponents, SiSocketdotio } from "react-icons/si";
import { motion } from "framer-motion";

const About = ({ section, setSection }) => {
  const scroll = useRef();
  useEffect(() => {
    if (section === "about") {
      scroll.current?.scrollIntoView({ behavior: "smooth" });
      setSection("");
    }
  });
  return (
    <Container>
      <motion.div className="about" ref={scroll}>
        <motion.div
          className="head"
          style={{
            x: -50,
            scaleY: 0,
          }}
          whileInView={{
            x: 0,
            scaleY: 1,
            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          }}
        >
          <motion.div className="line"> </motion.div>
          <h1>
            {" "}
            <span className="number">1.</span>
            About Rights<span>on</span>
          </h1>
        </motion.div>
        <motion.div className="first">
          <motion.p
            style={{
              x: 300,

              scaleY: 0,
            }}
            whileInView={{
              x: 0,

              scaleY: 1,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
          >
            Hello There, am Tole Rightson,second year student in riara
            university(This should prolly be in the education section:)), am
            from kenya(Nairobi).Am A full stack web developer.My intrest in web
            development started when i was 17, i guess, i was in highschool
            then, i did not realise i would become a coding addict, but here we
            are :)
          </motion.p>
          <motion.div
            className="tech-title"
            style={{
              x: -50,
              scaleY: 0,
            }}
            whileInView={{
              x: 0,
              scaleY: 1,
              transition: {
                duration: 0.5,
                delay: 0.7,
              },
            }}
          >
            {" "}
            Here are The technologies i have used recently
          </motion.div>
          <motion.div
            className="tech"
            style={{
              x: -50,
              scaleY: 0,
            }}
            whileInView={{
              x: 0,
              scaleY: 1,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
          >
            <motion.div
              style={{
                x: 300,

                scaleY: 0,
              }}
              whileInView={{
                x: 0,

                scaleY: 1,
                transition: {
                  duration: 0.5,
                  delay: 1,
                },
              }}
            >
              <Html /> <span>HTML 5</span>
            </motion.div>
            <motion.div>
              <Javascript /> <span>Javascript </span>
            </motion.div>
            <motion.div>
              <SiStyledcomponents />
              <span> Styled Components</span>
            </motion.div>
            <motion.div>
              <DiReact />

              <span> React</span>
            </motion.div>
            <motion.div>
              <DiSass />
              <span> Sass</span>
            </motion.div>
            <motion.div>
              <FaNodeJs />
              <span> Node js</span>
            </motion.div>
            <motion.div>
              <SiSocketdotio />
              <span> Socket io</span>
            </motion.div>
          </motion.div>
          <motion.p
            className="nails"
            style={{
              x: 300,

              scaleY: 0,
            }}
            whileInView={{
              x: 0,

              scaleY: 1,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }}
          >
            Apart from coding am also a nail artist
          </motion.p>
        </motion.div>
      </motion.div>{" "}
      <motion.div className="image">
        <motion.div
          className="image-container"
          style={{
            scaleY: 0,
          }}
          whileHover={{
            scale: 1.1,
          }}
          drag
          dragConstraints={{ top: 5, left: 5, bottom: 5, right: 5 }}
          whileInView={{
            scaleY: 1,
            transition: {
              duration: 0.5,
              delay: 0.3,
            },
          }}
        >
          <motion.img src={mypic} alt="" />
        </motion.div>
      </motion.div>
    </Container>
  );
};
const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  margin: 2rem;
  margin-left: 6rem;

  .about {
    /* border: 2px solid rgba(100, 0, 100, 1); */
    border-radius: 2rem;
    text-align: left;
    padding: 1rem;
    opacity: 0.8;
    font-family: "Handlee";
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
    .first {
      font-family: "Handlee";
    }
    .tech-title {
      margin: 1rem 0;

      width: fit-content;
    }
    .tech {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 1rem;
    }
    .nails {
      margin: 1rem 0;
    }
  }
  .image {
    width: 100%;
    height: 100%;
    .image-container {
      height: 300px;
      width: 300px;
      position: relative;
      z-index: 1;
      img {
        height: 100%;
        object-fit: cover;
        width: 100%;
        pointer-events: none;
        z-index: 2;
      }
      &::before {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        border: 2px solid white;
        bottom: -1rem;
        right: -1rem;
        z-index: -1;
      }
    }
  }
  @media (max-width: 900px) {
    grid-template-rows: 1.5fr 1fr;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 2rem;
    margin-left: 3rem;
    .about {
      .tech {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      }
    }
    .image {
      width: 100%;
      height: 100%;
      align-self: center;
      display: flex;
      justify-content: center;
      .image-container {
        height: 250px;
        width: 250px;

        img {
          height: 100%;
          object-fit: cover;
          width: 100%;
        }
      }
    }
  }
`;

export default About;
