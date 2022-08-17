import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export const Email = () => {
  return (
    <EmailContainer>
      <span></span> chari.rightson@gmail.com <span></span>
    </EmailContainer>
  );
};
const handleCllick = (url) => {
  window.location.replace();
};
const Links = () => {
  return (
    <Container>
      <motion.div className="links">
        <motion.div
          className="link"
          whileHover={{
            y: -4,
          }}
        >
          <a href="https://github.com/rightson-chari">
            <AiOutlineGithub />
          </a>
        </motion.div>
        <motion.div
          className="link"
          whileHover={{
            y: -4,
          }}
        >
          <a href="https://twitter.com/_rightson_">
            <AiFillTwitterCircle />
          </a>
        </motion.div>
        <motion.div
          className="link"
          whileHover={{
            y: -4,
          }}
        >
          <a href="https://www.linkedin.com/in/rightson-kirigha-a93040228/">
            <AiFillLinkedin />
          </a>
        </motion.div>
      </motion.div>
      <div className="line"></div>
    </Container>
  );
};
const Container = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 2rem;
  height: 40vh;
  display: flex;
  flex-direction: column;
  opacity: 0.6;
  align-items: center;
  .links {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .line {
    flex: 1;
    width: 2px;
    justify-content: flex-end;
    height: 100px;
    background-color: #fff;
  }
  @media (max-height: 550px) {
    display: none;
  }
  @media (max-width: 600px) {
    position: absolute;
  }
`;
const EmailContainer = styled.div`
  position: fixed;
  bottom: 7rem;
  right: -3rem;
  display: flex;
  flex-direction: column;
  opacity: 0.6;
  align-items: center;
  z-index: -1;
  transform: rotate(90deg);
  span {
    width: 2px;
    height: 10px;
    background-color: #fff;
  }
  @media (max-height: 550px) {
    display: none;
  }
  @media (max-width: 600px) {
    position: absolute;
  }
`;
export default Links;
