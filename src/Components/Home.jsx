import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import Center from "./Center";

import Drawer from "./Drawer";
import Links, { Email } from "./Links";
import Nav from "./Nav";

const Home = ({ setSection, section }) => {
  const close = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const home = useRef();

  useEffect(() => {
    if (section === "home") {
      home.current?.scrollIntoView({ behavior: "smooth" });
      setSection("");
    }
  });
  return (
    <Container ref={home}>
      <Drawer close={close} open={open} setSection={setSection} />
      <Nav setOpen={setOpen} open={open} setSection={setSection} />
      <Links />
      <Email />
      <Center />
      <div className="mouse">
        <span></span>
      </div>
    </Container>
  );
};
const Container = styled.div`
  min-height: 100vh;
  padding-top: 3rem;
  z-index: 2;
  position: relative;

  .top {
    height: 2rem;
  }
  .img {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 90%;
    }
  }
  .mouse {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 45px;
    border-radius: 30px;
    border: 2px solid white;
    pointer-events: none;

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: fuchsia;
      padding: 0.1rem;
      border-radius: 50%;
      animation: upDown 1s infinite;
      @keyframes upDown {
        0% {
          transform: translateY(-13px) translateX(-50%) scale(1.3);
        }
        10% {
          transform: translateY(-13px) translateX(-50%) scale(1.3);
        }
        50% {
          transform: translateY(-5px) translateX(-50%) scale(1);
        }
        100% {
          transform: translateY(-13px) translateX(-50%) scale(1.3);
        }
      }
    }
  }
`;

export default Home;
