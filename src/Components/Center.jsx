import React, { useState, useEffect } from "react";
import styled from "styled-components";
import robot from "../img/robot.gif";
import Typewriter from "typewriter-effect";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
const Center = () => {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const [cursor, setCursor] = useState("default");
  const handleClick = () => {
    toast.success("Resume still under development", toastOptions);
  };

  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const hellovariants = {
    initial: { x: -150 },
    animate: {
      x: 0,
    },
  };
  useEffect(() => {
    const mouseMove = (e) => {
      setMouse({
        x: e.x,
        y: e.y,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    // return () => window.removeEventListener("mousemove", mouseMove);
  }, []);
  const hellvariants = {
    initial: { x: -700, scaleY: 0 },
    animate: {
      x: 0,
      scaleY: 1,
    },
  };
  const namevariants = {
    initial: { x: -200, scaleY: 0 },
    animate: {
      x: 0,
      scaleY: 1,
    },
  };
  const cursorvariants = {
    default: {
      x: mouse.x - 16,
      y: mouse.y - 16,
      scale: 0,
    },
    text: {
      height: 70,
      width: 70,
      x: mouse.x - 35,
      y: mouse.y - 35,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };
  const textEnter = () => {
    setCursor("text");
  };
  const textLeave = () => {
    setCursor("default");
  };
  return (
    <Container variants={variants} initial="initial" animate="animate">
      <motion.div className="me">
        <motion.div className="sub-title" variants={hellovariants}>
          <h4>Hello There</h4>
        </motion.div>
        <motion.div
          className="name"
          variants={namevariants}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h1>
            TOL<span>E RIGHTS</span>ON
          </h1>
        </motion.div>
        <motion.div className="who">
          <p>
            <Typewriter
              options={{
                strings: [" Full Stack Web Developer", "Nail Artist"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </motion.div>
        <motion.div className="more" variants={hellvariants}>
          Am a Mern stack web Developer based in Kenya(Nairobi), Riara
          University
        </motion.div>
        <motion.div
          className="cursor"
          variants={cursorvariants}
          animate={cursor}
        ></motion.div>
        <motion.div
          className="resume"
          variants={hellvariants}
          onClick={handleClick}
        >
          Download Resume
        </motion.div>
      </motion.div>
      <motion.div className="robot">
        <img src={robot} alt="" />
      </motion.div>
      <ToastContainer />
    </Container>
  );
};
const Container = styled(motion.div)`
  display: flex;
  margin: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Handlee";
  .Toastify__toast-body {
    color: black;
    div:nth-child(2) {
      color: black;
    }
  }
  .me {
    .sub-title {
      margin-bottom: 1rem;
      h4 {
        color: fuchsia;
      }
    }

    .name {
      h1 {
        font-size: 3rem;
        margin: 2rem 0;
        cursor: none;

        span {
          background: linear-gradient(
            180.34deg,
            #f44e77 -7.22%,
            rgba(244, 78, 119, 0) 100%
          );

          background-clip: text;
          -webkit-background-clip: text;
          color: fuchsia;
        }
      }
    }
    .who {
      font-size: 1.7rem;
      font-weight: 600;
      margin-bottom: 1rem;
      opacity: 0.8;
      font-family: "Handlee";
    }
    .more {
      margin-left: 1rem;
    }
    .resume {
      margin: 3rem;
      border: 1px solid white;
      padding: 1rem;
      text-align: center;
      cursor: pointer;
    }
  }

  .robot {
    margin-left: 6rem;
    img {
      width: 90%;
    }
  }
  @media (max-width: 700px) {
    .robot {
      display: none;
    }

    .cursor {
      background-color: #111;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
    }
  }
  @media (max-height: 550px) {
    margin: 2rem 1rem;
    .me {
      .sub-title {
        margin-bottom: 0.3rem;
      }
      .name {
        h1 {
          margin: 1rem 0;
          font-size: 3rem;
        }
      }
      .who {
        font-size: 1rem;
      }
      .resume {
        margin: 1rem;
      }
    }
  }
  @media (min-height: 550px) {
    margin-top: 5rem;
    .me {
      .sub-title {
        padding-bottom: 2rem;
      }
      .name {
        h1 {
          margin-bottom: 2rem;
        }
      }
      .who {
        margin-bottom: 2rem;
      }
      .more {
        margin: 2rem 1rem;
      }
      .resume {
        margin: 2rem;
      }
    }
  }
`;
export default Center;
